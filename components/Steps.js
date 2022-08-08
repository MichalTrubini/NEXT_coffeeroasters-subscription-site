const Steps = (props) => {

    const steps = [
        {
            id: 1,
            order: '01',
            title: 'Pick your coffee',
            text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            id: 2,
            order: '02',
            title: 'Choose the frequency',
            text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            id: 3,
            order: '03',
            title: 'Receive and enjoy!',
            text: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        }
    ]

    return ( 
        <>
        <div className="steps__diagram">

        </div>
        <div className={props.classNameSteps + " steps__items"}>
            {steps.map(item => 
                <div className="steps__item" key={item.id}>
                    <div className="steps__diagram">
                        <div className='steps__circle'></div>
                        <div className={'steps__line--' + item.order + ' steps__line'}></div>
                    </div>
                    <h2 className="steps__item-order">{item.order}</h2>
                    <h3 className={props.classNameHeader + " steps__item-title"}>{item.title}</h3>
                    <p className={props.classNamePar + " steps__item-text"}>{item.text}</p>
                </div>
            )}
        </div>

        </>
     );
}
 
export default Steps;