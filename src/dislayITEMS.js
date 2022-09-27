import data from "./data";
import { useDispatch } from "react-redux";
import { push } from "./slice";
const DISPLAYitems = () => {
  const itemList = data;
  const dispatch = useDispatch();

  return (
    <>
      DISPLAYitems
      {itemList.map((item) => {
        return (
          <p
            onClick={() => {
              dispatch(push(item.id));
            }}
            key={item.id}
          >
            {item.name}
          </p>
        );
      })}
    </>
  );
};

export default DISPLAYitems;
