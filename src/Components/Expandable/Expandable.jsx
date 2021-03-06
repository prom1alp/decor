import { useState } from 'react';
import './expandable.css';

const Expandable = () => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(!opened);

  return (
    <div className="expandable">
      {!opened && <div className="expandable-gradient"></div>}
      <div className={`expandable-container ${!opened && 'expandable-closed'}`}>
        <div className="expandable-title">Декоративные панели для стен</div>
        <p className="expandable-p">
          К и без того огромному количеству разнообразных материалов для внутренней отделки помещений добавился еще один – декоративные панели. И хотя его нельзя назвать абсолютно новым, поскольку его разновидность в виде барельефа была известна с древних времен, именно сегодня у массового потребителя появилась возможность купить декоративные стеновые панели для внутренней отделки, что существенно расширило возможности интерьерного оформления жилых и коммерческих помещений.
        </p>
        <p className="expandable-p">
          Новая мода вряд ли будет сиюминутной: объемный эффект таких панельных модулей способен буквально преобразить внутреннее пространство комнаты, а простота монтажа/демонтажа практически сопоставима с временными затратами при более традиционных способах отделки стен. Разнообразие фактур и рисунков, возможность многократной покраски, частичной или полной замены панелей делают декоративные гипсовые панели действительно универсальным, экологически безвредным облицовочным материалом.
        </p>
        <div className="expandable-images">
          <img src="https://decoproduct.ru/assets/home_text_img1-30a7bc43ac96946918bf4ad19a1e64fb77421dce5172ee6fe2275c3503707fee.jpg" alt=""/>
          <img src="https://decoproduct.ru/assets/home_text_img2-f9f50388a204c0c4956630406bf82719418d3d5d590c2582d16d6125199e20f2.jpg" alt=""/>
          <img src="https://decoproduct.ru/assets/home_text_img3-3545fa0bbd77bacc63ebc25eaf835ff9c724d4dcc4fa1c502ab4b811b671746b.jpg" alt=""/>
        </div>
        <p className="expandable-p">
          Не случайно специалисты по интерьеру все чаще используют в своем творчестве именно объемные модули, что в полной мере отображает тенденции современного декоративного оформления помещений.
        </p>
        <p className="expandable-p">
          Если не рассматривать две крайности – панели из пластика (как самый бюджетный вариант) и выполненные из таких экзотических материалов, как бамбук или алюминий, то наибольшего внимания заслуживают, безусловно, декоративные панели из гипса. Этот материал известен и используется давно, а панели из гипса, в большом ассортименте предлагаемые интернет-магазином компании DECO LINE, характеризуются следующими преимуществами перед другими разновидностями материалов:
        </p>
        <ul>
          <li>гипс – экологически чистый и абсолютно безвредный отделочный материал, который не горюч и не способен поддерживать процесс горения. В состав гипсового листа, кроме непосредственно гипса, включаются полимеры в качестве армирующего элемента, и полностью отсутствуют фенол, стирол, формальдегид и другие химически активные материалы;</li>
          <li>декоративные гипсовые панели для стен, цена которых относится к категории «эконом», характеризуются простотой монтажа, что существенно уменьшает время, затрачиваемое на отделку стен (небольшую комнату можно при наличии соответствующих навыков оформить панелями за несколько часов);</li>
          <li>облицованная декоративными панелями стена при должной обработке не имеет видимых монтажных стыков или швов;</li>
          <li>с помощью гипсовых модулей можно также регулировать уровень влажности в комнате – впитывать излишки влаги при повышенной влажности и. наоборот, отдавать её, когда в помещении слишком сухо;</li>
          <li>с помощью декоративных панелей можно существенно улучшить шумо- и теплоизоляционные характеристики стен;</li>
          <li>гипсовые декор панели для стен можно многократно окрашивать, что позволяет с малыми затратами менять приевшийся интерьер.</li>
        </ul>
        <p className="expandable-p">
          Следует отметить, что на стоимость декоративных панелей, представленных в нашем интернет-магазине, влияет множество факторов: размеры (они могут варьироваться в широком диапазоне, наиболее востребованы плиты от 20х20 до 60х60 см), толщина (20-36 мм), сложность рисунка и качество обработки гипсовой поверхности.
        </p>
        <p className="expandable-p">
          В любом случае это вид отделочных материалов позволяет, как органично вписаться в существующий интерьер, так и создавать поверхности, которые могут выступать в качестве самостоятельного, а часто – центрального элемента интерьера. В нашем интернет магазине Вы сможете найти как и обычные 3D панели для стен, так и Влагостойкие 3D панели, а также уникальный в России Барельеф на стену.
        </p>
        <p className="expandable-p">
          Если вы планируете купить декоративные панели – обратитесь к нашим консультантам, которые подсчитают, какое их количество потребуется для конкретной комнаты (с учетом толщины плиты и необходимости совмещения сложных рисунков).
        </p>
      </div>
      <div className="expandable-button" onClick={toggleOpened}>{opened ? 'Скрыть' : 'Читать полностью'}</div>
    </div>
  );
};

export default Expandable;
