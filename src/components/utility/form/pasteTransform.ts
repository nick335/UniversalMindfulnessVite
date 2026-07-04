import showToast from '../../../utilsFunction/showToast'

const PT_TO_PX = 4 / 3

const parseFontSizePx = (style: string): number => {
  const match = style.match(/font-size:\s*([\d.]+)(px|pt)?/i)
  if (!match) return 0
  const value = parseFloat(match[1])
  return (match[2] || 'px').toLowerCase() === 'pt' ? value * PT_TO_PX : value
}

const parseFontWeight = (style: string): number => {
  const match = style.match(/font-weight:\s*(\d+|bold|bolder|normal|lighter)/i)
  if (!match) return 400
  const raw = match[1].toLowerCase()
  if (raw === 'bold' || raw === 'bolder') return 700
  if (raw === 'normal' || raw === 'lighter') return 400
  const n = parseInt(raw, 10)
  return Number.isFinite(n) ? n : 400
}

const unwrap = (el: Element) => {
  const parent = el.parentNode
  if (!parent) return
  while (el.firstChild) parent.insertBefore(el.firstChild, el)
  parent.removeChild(el)
}

export const transformPastedHTML = (html: string): string => {
  if (!html || !html.includes('<')) return html

  const isGoogleDocs = /id="docs-internal-guid-/i.test(html)

  const doc = new DOMParser().parseFromString(html, 'text/html')

  doc.querySelectorAll('meta, style, script, link, title').forEach((el) => el.remove())
  doc.querySelectorAll('o\\:p').forEach((el) => el.remove())
  doc.querySelectorAll('[class*="MsoNormal"], [class*="Mso"]').forEach((el) => {
    el.removeAttribute('class')
  })

  doc.querySelectorAll('b[id^="docs-internal-guid-"]').forEach(unwrap)

  doc.querySelectorAll<HTMLElement>('[style*="pt"]').forEach((el) => {
    const style = el.getAttribute('style') || ''
    const next = style.replace(/font-size:\s*([\d.]+)pt/gi, (_, pt: string) => {
      const px = Math.round(parseFloat(pt) * PT_TO_PX)
      return `font-size: ${px}px`
    })
    if (next !== style) el.setAttribute('style', next)
  })

  let droppedImageCount = 0
  doc.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || ''
    const isGoogleHosted = /googleusercontent\.com|docs\.google\.com|drive\.google\.com/i.test(src)
    if (isGoogleHosted) {
      img.remove()
      droppedImageCount += 1
    }
  })

  if (isGoogleDocs) {
    doc.querySelectorAll<HTMLElement>('p').forEach((p) => {
      const style = p.getAttribute('style') || ''
      const size = parseFontSizePx(style)
      const weight = parseFontWeight(style)
      let level = 0
      if (size >= 26) level = 1
      else if (size >= 20) level = 2
      else if (size >= 16) level = 3
      else if (size >= 14 && weight >= 600) level = 4

      if (level > 0) {
        const heading = doc.createElement(`h${level}`)
        while (p.firstChild) heading.appendChild(p.firstChild)
        p.replaceWith(heading)
      }
    })
  }

  doc.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
    const style = el.getAttribute('style') || ''
    const cleaned = style
      .replace(/line-height\s*:[^;]+;?/gi, '')
      .replace(/margin(-top|-bottom|-left|-right)?\s*:[^;]+;?/gi, '')
      .replace(/padding(-top|-bottom|-left|-right)?\s*:[^;]+;?/gi, '')
      .replace(/vertical-align\s*:[^;]+;?/gi, '')
      .replace(/white-space\s*:[^;]+;?/gi, '')
      .trim()
    if (cleaned) el.setAttribute('style', cleaned)
    else el.removeAttribute('style')
  })

  doc.querySelectorAll('span').forEach((span) => {
    if (span.attributes.length === 0) unwrap(span)
  })

  if (droppedImageCount > 0) {
    showToast(
      `${droppedImageCount} Google-hosted image${droppedImageCount === 1 ? '' : 's'} removed — please re-upload via the image button.`,
      'error'
    )
  }

  return doc.body.innerHTML
}
