import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    {
        id: 1,
        avatar: '/images/usa-flag.png',
    },
    {
        id: 2,
        avatar: '/images/ua-flag.png',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LanguageSelect() {
    const [selected, setSelected] = useState(people[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative mt-2 w-[65px] mx-auto gsap-05">
                        <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-inherit py-1.5 pl-3 pr-8 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex atems-center">
                                <img
                                    src={selected.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full mb-[1px]"
                                />
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-4 w-4 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#171717] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center w-6">
                                                    <img
                                                        src={person.avatar}
                                                        alt=""
                                                        className="h-[25px] w-[45px] flex-shrink-0 rounded-full"
                                                    />
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? 'text-white'
                                                                : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center mr-2'
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
