/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { TextStyle, FontSize } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import './TiptapStyles.css'
import { FieldError, Merge } from "react-hook-form"
import ErrorMessage from '../Error/ErrorMessage'
import { useEffect } from 'react'

interface props {
  label: string
  errorMessage: string | undefined,
  error: Merge<FieldError, (FieldError | undefined)[]> | undefined,
  value: string,
  onChange: (newContent: string) => void
}

const FormTiptapInput = ({ label, error, errorMessage, value, onChange }: props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6]
        }
      }),
      Underline,
      TextStyle.configure(),
      FontSize.configure(),
      Color.configure(),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'tiptap-link',
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange(html)
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
  })

  // Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  if (!editor) {
    return null
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  return (
    <div className={`font-inter w-full`}>
      <h3 className='text-base font-medium text-[#8692A6] capitalize'>{label}</h3>
      <div className="mt-3 tiptap-container">
        {/* Toolbar */}
        <div className="tiptap-toolbar">
          {/* Headings */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
              title="Heading 1"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
              title="Heading 2"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
              title="Heading 3"
            >
              H3
            </button>
          </div>

          {/* Text formatting */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
              title="Bold"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
              title="Italic"
            >
              <em>I</em>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'is-active' : ''}
              title="Underline"
            >
              <u>U</u>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
              title="Strikethrough"
            >
              <s>S</s>
            </button>
          </div>

          {/* Text color */}
          <div className="toolbar-group">
            <input
              type="color"
              onInput={(event) => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
              value={editor.getAttributes('textStyle').color || '#000000'}
              title="Text Color"
              className="color-picker"
            />
            <button
              type="button"
              onClick={() => editor.chain().focus().unsetColor().run()}
              title="Reset Color"
            >
              Reset Color
            </button>
          </div>

          {/* Font Size */}
          <div className="toolbar-group">
            <select
              onChange={(event) => {
                const size = event.target.value
                if (size === 'default') {
                  editor.chain().focus().unsetFontSize().run()
                } else {
                  editor.chain().focus().setFontSize(size).run()
                }
              }}
              value={editor.getAttributes('textStyle').fontSize || 'default'}
              className="font-size-select"
              title="Font Size"
            >
              <option value="default">Default</option>
              <option value="12px">12px</option>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              <option value="20px">20px</option>
              <option value="24px">24px</option>
              <option value="28px">28px</option>
              <option value="32px">32px</option>
              <option value="36px">36px</option>
              <option value="48px">48px</option>
              <option value="64px">64px</option>
            </select>
          </div>

          {/* Lists */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
              title="Bullet List"
            >
              • List
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
              title="Numbered List"
            >
              1. List
            </button>
          </div>

          {/* Alignment */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
              title="Align Left"
            >
              ⬅
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
              title="Align Center"
            >
              ⬌
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
              title="Align Right"
            >
              ➡
            </button>
          </div>

          {/* Quote & Code */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive('blockquote') ? 'is-active' : ''}
              title="Blockquote"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive('codeBlock') ? 'is-active' : ''}
              title="Code Block"
            >
              Code
            </button>
          </div>

          {/* Link */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={setLink}
              className={editor.isActive('link') ? 'is-active' : ''}
              title="Add Link"
            >
              Link
            </button>
            {editor.isActive('link') && (
              <button
                type="button"
                onClick={() => editor.chain().focus().unsetLink().run()}
                title="Remove Link"
              >
                Unlink
              </button>
            )}
          </div>

          {/* Clear formatting */}
          <div className="toolbar-group">
            <button
              type="button"
              onClick={() => editor.chain().focus().unsetAllMarks().run()}
              title="Clear Formatting"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Editor content */}
        <EditorContent editor={editor} />
      </div>
      {
        error && <ErrorMessage message={errorMessage} />
      }
    </div>
  )
}

export default FormTiptapInput
