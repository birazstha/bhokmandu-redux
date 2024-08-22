import { Toggle } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/theme-slice";

export default function Appearance(params) {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  function changeTheme() {
    dispatch(uiActions.toggleTheme());
  }

  return (
    <Toggle
      size="lg"
      onClick={changeTheme}
      checkedChildren={<i className="fa fa-sun"></i>}
      unCheckedChildren={<i className="far fa-moon"></i>}
      defaultChecked={theme}
    />
  );
}
