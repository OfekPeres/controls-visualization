import React, {Fragment, useState, useEffect} from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
// Example options
// const people = [
//   { id: 1, name: 'Durward Reynolds', unavailable: false },
//   { id: 2, name: 'Kenton Towne', unavailable: false },
//   { id: 3, name: 'Therese Wunsch', unavailable: false },
//   { id: 4, name: 'Benedict Kessler', unavailable: true },
//   { id: 5, name: 'Katelyn Rohan', unavailable: false },
// ];

export default function MyListbox({ options, updateParentSelection }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  useEffect(() => {
    updateParentSelection(selectedOption)
  }, [selectedOption])
  return (
    <div className="w-72 relative pointer-events-auto z-50">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default bg-white text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-blue-300 focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedOption.value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          enter="transition ease-in duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base text-left bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option}
                disabled={option.unavailable}
                className={({ active, disabled }) => `${
                  active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'
                } ${disabled ? 'cursor-not-allowed' : ''}
              cursor-default select-none relative py-2 pl-10 pr-4`}
              >
                {({ active, selected }) => (
                  <>
                    {selected ? (
                      <span
                        className={`text-blue-600  absolute inset-y-0 left-0 flex items-center pl-3 `}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                    {option.value}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
