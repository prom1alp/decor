import { Base } from '..';
import { Breadcrumbs } from '../../Components';
import './about.css';

const About = () => {
  return (
    <Base>
     <div className="about">
       <div className="about-title">О компании</div>
        <Breadcrumbs items={[
          {
            title: 'Главная',
            link: '/',
          },
          {
            title: 'О компании',
          }
        ]} />
        <div className="about-text">
          <p>
            Мы являемся производственной и оптово-розничной компанией декора для дома и сада, работаем более 12 лет на 
            рынке декоративных отделочных материалов и элементов оформления интерьера и сада .Основным направлением 
            организации.
          </p>
          <p>
            Основным направлением организации является производство гипсовых 3d панелей, декоративных 3d перегородок и 
            световых Led панелей из гипса. Мы используем для изготовления форм 3D панелей станки ЧПУ 4D, 
            выполняющие работу в 4D проекциях. Это машина с числовым программным управлением, предназначенная для 
            резки деталей разной сложности, обработки разных поверхностей с высокой точностью и скоростью. Новейшие 
            технологии компьютерного 4D моделирования позволяют изготовить двустороннюю жесткую форму с идеальной 
            геометрией по 3-м измерениям, что важно для бесшовной стыковки.
          
          </p>
          <b>Интернет магазин 3д декор это:</b>
          <ul>
            <li>Большой выбор качественных товаров для дома и сада, интерьера и декора - мы постоянно обновляем коллекции и расширяем ассортимент продукции.</li>
            <li>Возможность купить, оплатить и получить товар удобным Вам способом.</li>
            <li>Качественные товары по разумным ценам. Гарантия безопасной покупки.</li>
            <li>Качественный сервис на всех этапах обслуживания - наши менеджеры всегда будут на связи и помогут в любой ситуации.</li>
            <li>Качественная удобная система скидок для постоянных клиентов, специальные программы для привлечения различных категорий клиентов: крупных оптовых, розничных сетей, строительных организаций, дизайнерских и архитекторских студийнный сервис и высокие стандарты взаимодействия с клиентами.</li>
            <li>Скидки от суммы заказа - смотрите в разделе скидки.</li>
            <li>Команда опытных профессионалов.</li>
          </ul>
          <p>По всем интересующим Вас вопросам Вы можете звонить по номеру</p>
          <p>+7 978 8719739 , +7 978 8719739 или писать на электронную почту 3ddecorcrimea@mail.ru</p>
        </div>
      </div>
    </Base>
  );
};

export default About;
