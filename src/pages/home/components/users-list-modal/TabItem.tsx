interface TabItemProps {
  title: string
  checked?: boolean
}

const TabItem = ({ title, checked }: TabItemProps) => {
  return (
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab font-bold"
      aria-label={title}
      readOnly
      checked={checked}
    />
  )
}

export default TabItem
