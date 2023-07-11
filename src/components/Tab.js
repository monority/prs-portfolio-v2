import { Tab } from '@headlessui/react'

export default function MyTabs() {
    return (
        <Tab.Group>
            <Tab.List className="tab-wrap">
                <Tab>Front-end</Tab>
                <Tab>Back-end</Tab>
                <Tab>Design</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

