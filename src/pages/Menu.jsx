import { useEffect, useState, useRef } from 'react'
import { InView } from 'react-intersection-observer'
import gsap from 'gsap'
import { MdArrowBackIosNew } from 'react-icons/md'

//Components
import ProductCards from '../components/ProductCards'

const Menu = () => {
    //States
    const [scroll, setScroll] = useState(false)
    const [openToggleMenu, setOpenToggleMenu] = useState(true)
    const [saltedWaffles, setSaltedWaffles] = useState(false)
    const [sweetWaffles, setSweetWaffles] = useState(false)
    const [other, setOther] = useState(false)
    const [blackCoffee, setBlackCoffee] = useState(true)
    const [coffeeDrinks, setCoffeeDrinks] = useState(false)
    const [chocolate, setChocolate] = useState(false)
    const [tea, setTea] = useState(false)
    const [matcha, setMatcha] = useState(false)
    const [coldMenu, setColdMenu] = useState(false)
    const [limonade, setLimonade] = useState(false)
    const [milkshakes, setMilkshakes] = useState(false)
    const [offSet, setOffSet] = useState(0)

    //ref                                                           !blackCoffee&&!coffeeDrinks&&!chocolate&&!tea&&!matcha&&!coldMenu&&!limonade
    const wafflesSl = useRef(null)
    const wafflesSw = useRef(null)
    const another = useRef(null)
    const blackCof = useRef(null)
    const coffeeDr = useRef(null)
    const chocol = useRef(null)
    const theTea = useRef(null)
    const theMatcha = useRef(null)
    const coldMen = useRef(null)
    const limon = useRef(null)
    const milkSha = useRef(null)

    useEffect(() => {
        if (blackCoffee) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = 0
                return newOffSet
            })
        } else if (!blackCoffee) {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [blackCoffee])
    useEffect(() => {
        if (chocolate) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = -20
                return newOffSet
            })
        } else {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [chocolate])

    useEffect(() => {
        if (tea) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = -30
                return newOffSet
            })
        } else {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [tea])
    useEffect(() => {
        if (matcha) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = -45
                return newOffSet
            })
        } else {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [matcha])
    useEffect(() => {
        if (coldMenu) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = -54
                return newOffSet
            })
        } else {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [coldMenu])
    useEffect(() => {
        if (limonade) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = -70
                return newOffSet
            })
        } else {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [limonade])
    useEffect(() => {
        if (milkshakes) {
            setOffSet((currentOffSet) => {
                let newOffSet = currentOffSet

                newOffSet = -88
                return newOffSet
            })
        } else {
            setOffSet((currentOffSet) => {
                return currentOffSet
            })
        }
    }, [milkshakes])

    useEffect(() => {
        gsap.fromTo(
            '.gsap-05-menu-1',
            { y: -300 },
            {
                y: 0,
                duration: 0.3,
            }
        )
    }, [scroll])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 195) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [scroll])
    //Functions
    const scrollToSectionHundler = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 160,
            behavior: 'smooth',
        })
    }
    const openToToggleMenuHandlerDrinks = () => {
        setOpenToggleMenu(() => true)
    }
    const openToToggleMenuHandlerFood = () => {
        setOpenToggleMenu(() => false)
    }
    return (
        <div className="mt-[120px] font-syne-mono bg-white">
            <hr />
            <div
                className={
                    scroll
                        ? 'fixed top-0 flex bg-white z-50 w-full justify-center pb-2 gap-8 gsap-05-menu-1 border-[#256469] border-b-2 text-[#256469]'
                        : 'flex justify-center border-[#256469] border-b-2 [#256469] text-[#256469] pb-2'
                }
            >
                <div
                    className={
                        openToggleMenu
                            ? 'flex  mx-2 justify-center items-center cursor-pointer  border-b border-[#256469]'
                            : 'flex mx-2 justify-center items-center cursor-pointer opacity-60 '
                    }
                    onClick={openToToggleMenuHandlerDrinks}
                >
                    <h2 className="text-center text-xl px-2 uppercase">
                        Напої
                    </h2>
                </div>
                <div
                    className={
                        openToggleMenu
                            ? 'flex-column p-[1px] mx-2 justify-center items-center cursor-pointer  opacity-60 '
                            : 'flex-column  mx-2 justify-center items-center cursor-pointer  p-[1px] border-b border-[#256469]'
                    }
                    onClick={openToToggleMenuHandlerFood}
                >
                    <h2 className="text-center text-xl p-2 uppercase">Їжа</h2>
                </div>
            </div>
            {/* subsections */}
            <div>
                {openToggleMenu ? (
                    <div className="w-full h-full">
                        {/* Drinks subsections*/}
                        <div
                            className={
                                scroll
                                    ? 'fixed top-[45px] z-50 justify-center flex bg-white overflow-auto gsap-05-menu-1 py-2 px-[2px]'
                                    : 'flex overflow-auto py-2 px-[2px] w-full '
                            }
                        >
                            <div
                                style={{ transform: `translateX(${offSet}%)` }}
                                className="flex pb-1 text-center text-base gap-2 duration-300"
                            >
                                <div
                                    className={
                                        blackCoffee && !coffeeDrinks
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(blackCof)
                                    }
                                >
                                    <button className="text">Чорна кава</button>
                                </div>
                                <div
                                    className={
                                        coffeeDrinks && !chocolate
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(coffeeDr)
                                    }
                                >
                                    <button>Кавові напої</button>
                                </div>
                                <div
                                    className={
                                        chocolate && !tea
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(chocol)
                                    }
                                >
                                    <button>Какао</button>
                                </div>
                                <div
                                    className={
                                        tea && !matcha
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(theTea)
                                    }
                                >
                                    <button>Чай</button>
                                </div>
                                <div
                                    className={
                                        matcha && !coldMenu
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(theMatcha)
                                    }
                                >
                                    <button>Матча</button>
                                </div>
                                <div
                                    className={
                                        coldMenu && !limonade
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(coldMen)
                                    }
                                >
                                    <button>Холодне меню</button>
                                </div>
                                <div
                                    className={
                                        limonade && !milkshakes
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(limon)
                                    }
                                >
                                    <button>Лимонади та інше</button>
                                </div>
                                <div
                                    className={
                                        milkshakes
                                            ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2'
                                            : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                    }
                                    onClick={() =>
                                        scrollToSectionHundler(milkSha)
                                    }
                                >
                                    <button>Мілкшейки</button>
                                </div>
                                <div
                                    className="flex  h-full shrink-0 border border-[#256469] text-[#256469] rounded px-2 items-center"
                                    onClick={() =>
                                        scrollToSectionHundler(blackCof)
                                    }
                                >
                                    <MdArrowBackIosNew className="w-8 text-2xl" />
                                </div>
                            </div>
                        </div>
                        {/* Products from Drinks */}
                        <div className={scroll ? 'mt-[200px]' : ''}>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setBlackCoffee(inView)
                                }
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Чорна кава
                                </h2>
                                <div ref={blackCof}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setCoffeeDrinks(inView)
                                }
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Кавові напої
                                </h2>
                                <div ref={coffeeDr}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setChocolate(inView)
                                }
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Какао
                                </h2>
                                <div ref={chocol}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) => setTea(inView)}
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Чай
                                </h2>
                                <div ref={theTea}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) => setMatcha(inView)}
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Матча
                                </h2>
                                <div ref={theMatcha}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setColdMenu(inView)
                                }
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Холодне меню
                                </h2>
                                <div ref={coldMen}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setLimonade(inView)
                                }
                                className="w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Лимонади та інше
                                </h2>
                                <div ref={limon}></div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setMilkshakes(inView)
                                }
                                className=" w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Мілкшейки
                                </h2>
                                <div ref={milkSha}></div>
                            </InView>
                        </div>
                    </div>
                ) : (
                    <div className=" h-full">
                        {/* Food subsections*/}
                        <div
                            className={
                                scroll
                                    ? 'fixed top-[45px] z-50 justify-center flex bg-white w-full overflow-hidden gsap-05-menu-1 py-2 px-[2px] text-base gap-1 '
                                    : 'flex overflow-hidden py-2 px-[2px] justify-center w-full text-base gap-1'
                            }
                        >
                            <div
                                className={
                                    saltedWaffles && !sweetWaffles
                                        ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2 p-2'
                                        : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                }
                                onClick={() =>
                                    scrollToSectionHundler(wafflesSl)
                                }
                            >
                                <button className="text-[0.950rem]">
                                    Солені вафлі
                                </button>
                            </div>
                            <div
                                className={
                                    sweetWaffles && !other
                                        ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2 p-2'
                                        : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                }
                                onClick={() =>
                                    scrollToSectionHundler(wafflesSw)
                                }
                            >
                                <button className="text-[0.950rem]">
                                    Солодкі вафлі
                                </button>
                            </div>
                            <div
                                className={
                                    other
                                        ? 'flex h-full shrink-0 border-2 border-[#256469] text-[#256469] rounded px-2 p-2'
                                        : 'flex h-full shrink-0 items-center p-2 border rounded border-[#256469] text-[#256469] opacity-70'
                                }
                                onClick={() => scrollToSectionHundler(another)}
                            >
                                <button className="text-[0.950rem]">
                                    Додатки
                                </button>
                            </div>
                        </div>
                        {/* Products from food */}
                        <div className={scroll ? 'mt-[200px]' : ''}>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setSaltedWaffles(inView)
                                }
                                className="w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Солені вафлі
                                </h2>
                                <div ref={wafflesSl}>
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688985636/%D0%A1%D0%B8%D1%80%D0%BD%D0%B0.jpg'
                                        }
                                        title={'Сирна'}
                                        text={
                                            'Суперсирна вафля із трьох видів сирів з волоським горіхом полита бальзамічним соусом.'
                                        }
                                        price={'140'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688985892/%D0%97_%D1%82%D1%83%D0%BD%D1%86%D0%B5%D0%BC_ca772b.jpg'
                                        }
                                        title={'З тунцем'}
                                        text={
                                            'Ніжний крем сир, свіже авокадо, соковитий тунець з додаванням в"ялених томатів під бальзамічним соусом.'
                                        }
                                        price={'140'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688990441/%D0%97_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_83a073.jpg'
                                        }
                                        title={'З беконом'}
                                        text={
                                            'Ніжний крем сир, соковитий смажений бекон, грильовані грибочки, вишуканий пармезан та яскравий часниковий соус.'
                                        }
                                        price={'140'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688990815/%D0%97%20%D1%85%D0%B0%D0%BC%D0%BE%D0%BD%D0%BE%D0%BC.jpg'
                                        }
                                        title={'З хамоном та моцарелою'}
                                        text={
                                            'Вишуканий хамон, ніжна моцарела, свіжі томати, яскравий часниковий соус, мікс салату у завершені бальзамічного соусу.'
                                        }
                                        price={'140'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688991222/Chicken.jpg'
                                        }
                                        title={'Chicken'}
                                        text={
                                            "Бельгійська вафелька зі смаженим курчам, грибочками та соковитими в'яленими томатами у гармонії з сирним соусом."
                                        }
                                        price={'120'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688992271/%D0%97%20%20%D0%9C%D0%98%D0%A1%D0%9B%D0%98%D0%92%D0%A1%D0%AC%D0%9A%D0%98%D0%9C%D0%98%20%D0%9A%D0%9E%D0%92%D0%91%D0%90%D0%A1%D0%9A%D0%90%D0%9C%D0%98.jpg'
                                        }
                                        title={`З мисливськими ковбасками  `}
                                        text={
                                            'Ідеальна композиція смажених ковбасок, фіолетової цибульки та пікантних маринованих огірочків ніжністю став розтанувший сир, а кисло-солодкий соус буде гармонійним до останнього шматочка.'
                                        }
                                        price={'120'}
                                    />
                                </div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) =>
                                    setSweetWaffles(inView)
                                }
                                className="w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Солодкі вафлі
                                </h2>
                                <div ref={wafflesSw}>
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688991531/%D0%A8%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%20%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD.jpg'
                                        }
                                        title={'Шоколад банан'}
                                        text={
                                            'Класичний,  але неповторний та завжди актуальний тандем.'
                                        }
                                        price={'80'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688992787/%D0%9A%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D0%BB%D1%8C%20%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD.jpg'
                                        }
                                        title={'Карамель банан'}
                                        text={
                                            'Вершково ніжнка солона карамель власного приготування у поєднанні з бананом.'
                                        }
                                        price={'80'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688991903/Raffaello.jpg'
                                        }
                                        title={'Raffaello'}
                                        text={
                                            'Найроманиичніша вафля,  з мега ніжним кокосовим кремом у завершені мигдальних пластівців.'
                                        }
                                        price={'100'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688993135/%D0%A4%D1%96%D1%81%D1%82%D0%B0%D1%88%D0%BA%D0%B0-%D1%81%D0%BE%D0%BB%D0%B5%D0%BD%D0%B0%20%D0%BA%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D0%BB%D1%8C.jpg'
                                        }
                                        title={'Фісташка-солена карамель'}
                                        text={
                                            'Неперевершена паста із хрумкою фісташкою у поєднані з солоною карамелю власного приготування.'
                                        }
                                        price={'90'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688993454/%D0%A1%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0%20%D1%87%D1%96%D0%B7.jpg'
                                        }
                                        title={'Смородина чіз'}
                                        text={
                                            'Ніжний крем сир у поєднані з смородиною під повітряними рослинними вершками, які так нагадують пломбір.'
                                        }
                                        price={'90'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688995481/%D0%9C%D0%BE%D1%80%D0%BE%D0%B7%D0%B8%D0%B2%D0%BE%20%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD.jpg'
                                        }
                                        title={'Морозиво банан'}
                                        text={
                                            'Банан, морозиво, повітряні вершки солона карамель власного приготування.'
                                        }
                                        price={'100'}
                                    />
                                    <ProductCards
                                        url={
                                            'https://res.cloudinary.com/dlmgm4bya/image/upload/v1688995871/%D0%A1%D0%B8%D1%80%D0%BD%D0%B8%D0%BA%D0%B8.jpg'
                                        }
                                        title={'Сирники'}
                                        text={
                                            'Подається з грецьким йогуртом та смородиною, присутні легкі нотки солоної карамелі.'
                                        }
                                        price={'100'}
                                    />
                                </div>
                            </InView>
                            <InView
                                as="div"
                                onChange={(inView, entry) => setOther(inView)}
                                className="w-full bg-[#256469] py-2"
                            >
                                <h2 className="text-center text-3xl text-white">
                                    Додатки
                                </h2>
                                <div ref={another}></div>
                            </InView>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu
