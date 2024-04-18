import closeIcon from "@i/close.svg";
import infoblockImg from "@i/infoblock.jpg";
import Cast from "./UI/Cast";
import Btn from "./UI/Btn";
function InfoBlock({active}:{active:boolean}) {
  return (
    <div className={`infoblock ${active ? 'active' : ''}`}>
      <img src={infoblockImg} alt="" className="infoblock__img" />
      <button className="infoblock__close">
        <img src={closeIcon} alt="" />
      </button>
      <div className="infoblock__content">
        <h2 className="infoblock__title">Шан-Чи и легенда десяти колец</h2>
        <p className="infoblock__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh bibendum nec, pulvinar id in in ac nisl semper. Condimentum tellus ac integer condimentum. Amet, vitae dictum convallis dignissim. Lacus, suscipit sagittis, adipiscing metus, risus convallis sit...</p>
        <ul className="infoblock__genres">
            <li>2021</li>
            <li>боевик</li>
            <li>приключения</li>
            <li>фэнтези</li>
            <li>2h 12m</li>
        </ul>
        <ul className="infoblock__cast">
            <Cast/>
        </ul>
        <Btn/>
      </div>
    </div>
  );
}

export default InfoBlock;
