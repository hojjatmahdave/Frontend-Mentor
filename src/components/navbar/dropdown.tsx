import React from "react";
import { Dropdown, MenuProps } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { DropdownStyles } from "../../styles/navbar/dropdown";
import { BsFillFlagFill } from "react-icons/bs";
type Props = {
  text: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5?: string;
  item6?: string;
  item7?: string;
  item8?: string;
  item9?: string;
  item10?: string;
};
export const Dropdowns = ({
  text,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
}: Props) => {
  const items: MenuProps["items"] = [
    text === "My Account"
      ? {
          key: "0",
          label: (
            <a target="_blank" rel="" href="" style={{ color: "#aaa" }}>
              hojjatjanjan@gmail.com
            </a>
          ),
        }
      : null,
    text === "My Account"
      ? {
          type: "divider",
        }
      : null,
    text === "My Account"
      ? {
          key: "1",
          label: <button>Send top-up</button>,
        }
      : null,
    item1 !== ""
      ? {
          key: "2",
          label: (
            <a target="_blank" rel="" href="">
              {item1}
            </a>
          ),
        }
      : null,
    item2 !== ""
      ? {
          key: "3",
          label: (
            <a target="_blank" rel="" href="">
              {item2}
            </a>
          ),
        }
      : null,
    item3 !== ""
      ? {
          key: "4",
          label: (
            <a target="_blank" rel="" href="">
              {item3}
            </a>
          ),
        }
      : null,
    item4 !== ""
      ? {
          key: "5",
          label: (
            <a target="_blank" rel="" href="">
              {item4}
            </a>
          ),
        }
      : null,
    item5 !== ""
      ? {
          key: "6",
          label: (
            <a target="_blank" rel="" href="">
              {item5}
            </a>
          ),
        }
      : null,
    item6 !== ""
      ? {
          key: "7",
          label: (
            <a target="_blank" rel="" href="">
              {item6}
            </a>
          ),
        }
      : null,
    item7 !== ""
      ? {
          key: "8",
          label: (
            <a target="_blank" rel="" href="">
              {item7}
            </a>
          ),
        }
      : null,
    item8 !== ""
      ? {
          key: "9",
          label: (
            <a target="_blank" rel="" href="">
              {item8}
            </a>
          ),
        }
      : null,
    item9 !== ""
      ? {
          key: "10",
          label: (
            <a target="_blank" rel="" href="">
              {item9}
            </a>
          ),
        }
      : null,
    text === "My Account"
      ? {
          type: "divider",
        }
      : null,
    text === "My Account"
      ? {
          key: "11",
          label: (
            <a
              target="_blank"
              rel=""
              href=""
              style={{ color: "rgb(217, 0, 199)", fontWeight: "550" }}
            >
              Log out
            </a>
          ),
        }
      : null,
  ];
  return (
    <>
      <DropdownStyles />
      <Dropdown
        menu={{ items }}
        placement={text === "My Account" ? "bottomRight" : "bottom"}
        arrow
      >
        {text === "EN" ? (
          <div>
            <BsFillFlagFill />
            <p>{text}</p>
            <MdKeyboardArrowDown size={20} />
          </div>
        ) : (
          <div>
            <p>{text}</p>
            <MdKeyboardArrowDown size={20} />
          </div>
        )}
      </Dropdown>
    </>
  );
};
