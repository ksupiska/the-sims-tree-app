import React from 'react';

import { Container, Button } from 'react-bootstrap';
import '../css/main-page.css';

const MainText: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>CREATE A DYNASTY TREE FOR FAMILY IN THE SIMS 4</h4>
);
const MainText2: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>Какие инструменты есть в нашем сервисе?</h4>
);
const TextInImageH2: React.FC = () => <h1 className='fade-in' style={{ fontSize: '5vw', maxWidth: '100%', margin: '0 auto' }} >THE SIMS TREE</h1>;
const TextInImageH4: React.FC = () => <h4 className='fade-in' style={{ fontSize: '3vw', maxWidth: '100%', margin: '0 auto' }}>Save your story</h4>;
const TextInImageP: React.FC = () => (
    <h5 className='fade-in' style={{ fontSize: '2vw', maxWidth: '100%', margin: '0 auto' }}>
        Создавайте уникальные семейные истории, <br /> следите за развитием своих персонажей и передавайте
        <br />свои незабываемые моменты из поколения в поколение. <br /> Начните строить свой собственный мир вместе
        с нами и оставьте след в истории!
    </h5>
);

const DynastySVG: React.FC = () => (
    <svg width="90" height="90" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50.5" cy="42.5" r="15.5" stroke="black" stroke-width="2" />
        <circle cx="50.5" cy="38.5" r="6.5" stroke="black" stroke-width="2" />
        <mask id="path-3-inside-1_40_51" fill="white">
            <path d="M61 54.5C61 51.7152 59.8938 49.0445 57.9246 47.0754C55.9555 45.1062 53.2848 44 50.5 44C47.7152 44 45.0445 45.1062 43.0754 47.0754C41.1062 49.0445 40 51.7152 40 54.5L41.9191 54.5C41.9191 52.2242 42.8232 50.0416 44.4324 48.4324C46.0416 46.8232 48.2242 45.9191 50.5 45.9191C52.7758 45.9191 54.9584 46.8232 56.5676 48.4324C58.1768 50.0416 59.0809 52.2242 59.0809 54.5H61Z" />
        </mask>
        <path d="M61 54.5C61 51.7152 59.8938 49.0445 57.9246 47.0754C55.9555 45.1062 53.2848 44 50.5 44C47.7152 44 45.0445 45.1062 43.0754 47.0754C41.1062 49.0445 40 51.7152 40 54.5L41.9191 54.5C41.9191 52.2242 42.8232 50.0416 44.4324 48.4324C46.0416 46.8232 48.2242 45.9191 50.5 45.9191C52.7758 45.9191 54.9584 46.8232 56.5676 48.4324C58.1768 50.0416 59.0809 52.2242 59.0809 54.5H61Z" fill="#D9D9D9" stroke="black" stroke-width="2" mask="url(#path-3-inside-1_40_51)" />
        <circle cx="23.5" cy="20.5" r="15.5" stroke="black" stroke-width="2" />
        <circle cx="23.5" cy="16.5" r="6.5" stroke="black" stroke-width="2" />
        <mask id="path-6-inside-2_40_51" fill="white">
            <path d="M34 32.5C34 29.7152 32.8938 27.0445 30.9246 25.0754C28.9555 23.1062 26.2848 22 23.5 22C20.7152 22 18.0445 23.1062 16.0754 25.0754C14.1062 27.0445 13 29.7152 13 32.5L14.9191 32.5C14.9191 30.2242 15.8232 28.0416 17.4324 26.4324C19.0416 24.8232 21.2242 23.9191 23.5 23.9191C25.7758 23.9191 27.9584 24.8232 29.5676 26.4324C31.1768 28.0416 32.0809 30.2242 32.0809 32.5H34Z" />
        </mask>
        <path d="M34 32.5C34 29.7152 32.8938 27.0445 30.9246 25.0754C28.9555 23.1062 26.2848 22 23.5 22C20.7152 22 18.0445 23.1062 16.0754 25.0754C14.1062 27.0445 13 29.7152 13 32.5L14.9191 32.5C14.9191 30.2242 15.8232 28.0416 17.4324 26.4324C19.0416 24.8232 21.2242 23.9191 23.5 23.9191C25.7758 23.9191 27.9584 24.8232 29.5676 26.4324C31.1768 28.0416 32.0809 30.2242 32.0809 32.5H34Z" fill="#D9D9D9" stroke="black" stroke-width="2" mask="url(#path-6-inside-2_40_51)" />
        <circle cx="76.5" cy="20.5" r="15.5" stroke="black" stroke-width="2" />
        <circle cx="76.5" cy="16.5" r="6.5" stroke="black" stroke-width="2" />
        <mask id="path-9-inside-3_40_51" fill="white">
            <path d="M87 32.5C87 29.7152 85.8938 27.0445 83.9246 25.0754C81.9555 23.1062 79.2848 22 76.5 22C73.7152 22 71.0445 23.1062 69.0754 25.0754C67.1062 27.0445 66 29.7152 66 32.5L67.9191 32.5C67.9191 30.2242 68.8232 28.0416 70.4324 26.4324C72.0416 24.8232 74.2242 23.9191 76.5 23.9191C78.7758 23.9191 80.9584 24.8232 82.5676 26.4324C84.1768 28.0416 85.0809 30.2242 85.0809 32.5H87Z" />
        </mask>
        <path d="M87 32.5C87 29.7152 85.8938 27.0445 83.9246 25.0754C81.9555 23.1062 79.2848 22 76.5 22C73.7152 22 71.0445 23.1062 69.0754 25.0754C67.1062 27.0445 66 29.7152 66 32.5L67.9191 32.5C67.9191 30.2242 68.8232 28.0416 70.4324 26.4324C72.0416 24.8232 74.2242 23.9191 76.5 23.9191C78.7758 23.9191 80.9584 24.8232 82.5676 26.4324C84.1768 28.0416 85.0809 30.2242 85.0809 32.5H87Z" fill="#D9D9D9" stroke="black" stroke-width="2" mask="url(#path-9-inside-3_40_51)" />
        <line x1="39" y1="19" x2="61" y2="19" stroke="black" stroke-width="2" />
        <line x1="29.7614" y1="35.3517" x2="34.9477" y2="41.4429" stroke="black" stroke-width="2" />
        <line x1="70.8521" y1="35.6349" x2="65.7725" y2="41.8154" stroke="black" stroke-width="2" />
        <circle cx="94" cy="4" r="3" stroke="black" stroke-width="2" />
        <circle cx="4" cy="7" r="3" stroke="black" stroke-width="2" />
        <circle cx="86.8486" cy="42.0015" r="3" transform="rotate(-166.005 86.8486 42.0015)" stroke="black" stroke-width="2" />
        <circle cx="66.8486" cy="60.0015" r="3" transform="rotate(-166.005 66.8486 60.0015)" stroke="black" stroke-width="2" />
        <circle cx="27.8486" cy="44.0015" r="3" transform="rotate(-166.005 27.8486 44.0015)" stroke="black" stroke-width="2" />
        <line x1="91.8" y1="6.6" x2="88.8" y2="10.6" stroke="black" stroke-width="2" />
        <line x1="6.8" y1="9.4" x2="9.8" y2="13.4" stroke="black" stroke-width="2" />
        <line x1="84.7121" y1="38.9955" x2="82.7685" y2="34.3888" stroke="black" stroke-width="2" />
        <line x1="64.7121" y1="56.9955" x2="62.7685" y2="52.3888" stroke="black" stroke-width="2" />
        <line x1="25.7121" y1="40.9955" x2="23.7685" y2="36.3888" stroke="black" stroke-width="2" />
    </svg>
);
const DynastyH4: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>Династии</h4>
);
const DynastyP: React.FC = () => (
    <p>Создавайте уникальные династийные древа для своих семейных историй. Отслеживайте развитие своих персонажей и сохраняйте их наследие в увлекательных сагах.</p>
);

const CustomSVG: React.FC = () => (
    <svg width="90" height="90" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="51" height="51" fill="url(#pattern0_40_72)" />
        <defs>
            <pattern id="pattern0_40_72" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_40_72" transform="scale(0.0078125)" />
            </pattern>
            <image id="image0_40_72" width="128" height="128" xlinkHref="data:image/png;base64,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" />
        </defs>
    </svg>
);
const CustomH4: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>Кастомизация</h4>
);
const CustomP: React.FC = () => (
    <p>Воплощайте свои идеи в жизнь с помощью множества инструментов для кастомизации древ. Выбирайте цвета, шрифты и фоны, чтобы сделать вашу историю уникальной.</p>
);

const ImagesSVG: React.FC = () => (
    <svg width="90" height="90" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="51" height="51" fill="url(#pattern0_40_84)" />
        <defs>
            <pattern id="pattern0_40_84" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_40_84" transform="scale(0.0078125)" />
            </pattern>
            <image id="image0_40_84" width="128" height="128" xlinkHref="data:image/png;base64,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" />
        </defs>
    </svg>
);
const ImagesH4: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>Фоторедактор</h4>
);
const ImagesP: React.FC = () => (
    <p>Выберите собственный стиль и атмосферу с помощью фоторедактора. Редактируйте фотографии своих персонажей и древ, чтобы подчеркнуть их характер и настроение.</p>
);

const GallerySVG: React.FC = () => (
    <svg width="90" height="90" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="51" height="51" fill="url(#pattern0_40_98)" />
        <defs>
            <pattern id="pattern0_40_98" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_40_98" transform="scale(0.0078125)" />
            </pattern>
            <image id="image0_40_98" width="128" height="128" xlinkHref="data:image/png;base64,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" />
        </defs>
    </svg>
);
const GalleryH4: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>Галерея</h4>
);
const GalleryP: React.FC = () => (
    <p>Храните фотографии своих персонажей и их приключений в галерее. Создавайте воспоминания и делитесь ими с другими пользователями.</p>
);

const GroupsSVG: React.FC = () => (
    <svg width="90" height="90" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="51" height="51" fill="url(#pattern0_40_115)" />
        <defs>
            <pattern id="pattern0_40_115" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_40_115" transform="scale(0.0078125)" />
            </pattern>
            <image id="image0_40_115" width="128" height="128" xlinkHref="data:image/png;base64,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" />
        </defs>
    </svg>
);
const GroupsH4: React.FC = () => (
    <h4 style={{ fontSize: '1.3rem' }}>Сообщество</h4>
);
const GroupsP: React.FC = () => (
    <p>Публикуйте свои династии в галерее и делитесь ими с сообществом. Дайте другим увидеть вашу творческую работу и получите вдохновение от историй других участников.</p>
);
const MainPage: React.FC = () => {
    return (
        <div className="Container" style={{ paddingTop: '100px', paddingBottom: '100px', overflow: 'hidden' }}>
            <main>
                <Container style={{ fontFamily: 'The-Sims-Sans-Bold-SC' }}>
                    <div className="text-center" style={{ color: 'black' }}>
                        <MainText />
                    </div>
                    <div className="text-center" style={{ paddingTop: '20px', position: 'relative' }}>
                        <img
                            src="/images/image1-main-page.jpg"
                            alt="Family Dynasty"
                            className='fade-in'
                            style={{
                                width: '100vw', // Ширина на всю видимую ширину экрана
                                height: 'auto', // Автоматическая высота для сохранения пропорций
                                marginLeft: 'calc((100% - 100vw) / 2)' // Центровка изображения
                            }}
                        />
                        <div className="overlay-text" style={overlayTextStyle}>
                            <TextInImageH2 />
                            <TextInImageH4 />
                            <TextInImageP />
                        </div>
                    </div>
                    <div className="text-center" style={{ color: 'black', paddingTop: '30px', paddingBottom: '30px' }}>
                        <MainText2 />
                    </div>
                    <Container>
                        <div className="container2">
                            <div className="text-item">
                                <div className="text-center2">
                                    <DynastySVG />
                                    <DynastyH4 />
                                    <DynastyP />
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="text-center2">
                                    <CustomSVG />
                                    <CustomH4 />
                                    <CustomP />
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="text-center2">
                                    <ImagesSVG />
                                    <ImagesH4 />
                                    <ImagesP />
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="text-center2">
                                    <GallerySVG />
                                    <GalleryH4 />
                                    <GalleryP />
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="text-center2">
                                    <GroupsSVG />
                                    <GroupsH4 />
                                    <GroupsP />
                                </div>
                            </div>
                        </div>
                    </Container>





                    <h1 className='text-center'>Скриншоты в разработке</h1>






                    <h1 className='text-center'>Начни свою династию прямо сейчас!</h1>
                    <h2 className='text-center'>Мы поможем сохранить вашу историю</h2>
                    <Button style={{ justifyContent: 'center', display: 'flex' }}>Зарегистрироваться</Button>
                </Container>
            </main>
        </div>
    );
};

// Стили для текстового наложения
const overlayTextStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%', // Центрировать по вертикали
    left: '50%', // Центрировать по горизонтали
    transform: 'translate(-50%, -50%)', // Смещение для центрирования
    color: 'white', // Цвет текста
    textAlign: 'center', // Выравнивание текста по центру
    padding: '2rem', // Отступы для текста
};

export default MainPage;