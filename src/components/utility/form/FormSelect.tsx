import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { FieldError, Merge } from "react-hook-form";
import { cn } from "../../../shad/utilis" 
import { Button } from "../../../ShadComponent/ui/button"
import ErrorMessage from "../Error/ErrorMessage";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../../ShadComponent/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../ShadComponent/ui/popover"
import selectData from "./selectData"

interface props {
  handleCategoryChange: (category: string) => void
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
}

export default function FormSelect({ handleCategoryChange, errorMessage, error }: props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`"w-[200px] justify-between capitalize ${
              error ? 'border-error' : ''
            }`}
          >
            {value
              ? selectData.find((each) => each.value === value)?.label
              : "Select category..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        {
          error && <ErrorMessage message={errorMessage} />
        }
      </div>
      

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No each found.</CommandEmpty>
          <CommandGroup>
            {selectData.map((each) => (
              <CommandItem
                key={each.value}
                value={each.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                  handleCategoryChange(currentValue)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === each.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {each.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
