import React from "react";

interface listItem {
  icon: string;
  text: string;
}

interface listProps {
  items: listItem[];
}

const List = ({ items }: listProps) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <div className="flex mb-3" key={index}>
            <img
              src={item.icon}
              alt={`iconList${index + 1}`}
              className="mr-2"
            />
            <li>{item.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
