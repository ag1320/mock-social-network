import vsfb from './VSFB.jpg'

export default function Home (){
    let content = {
        newsArticles: [
            {
                title: "We Raunch Lockets - the new Vandenberg Space Force Base motto",
                article: "on Friday an email containing a typo went out to VSFB-all. '...and in this, we must excel. It is what we do. We raunch lockets' since then, widespread adoption of the phrase led to its inauguration as VSFB motto.",
                img: vsfb
            },
            {
                title: "man plays worlds largest instrument for worlds smallest crowd",
                article: "A man named Ludwig Avicii Van Halen plays the new quadruple stacked super bass (a towering 10 stories high!) for a crowd of engaged ants",
                img: "https://tinyurl.com/4j5yvm88"
            },
            { 
                title: "Winning at Life!",
                article: "There are many ways to do so...but the best is just try, try, try again!",
                img: "https://m.media-amazon.com/images/I/91FnnNUmEgL._AC_SL1500_.jpg"
            }
        ],
        contactProfiles: [
            {
                firstName: "Chis",
                lastName: "Hadfield",
                birthday: "04/05/1958 00:00:00",
                profileImage: "https://tinyurl.com/rc55d9n2"
            }
        ]
    }
    
    return (
        <>
        <div>
            <h1>Welcome, {content.contactProfiles[0].firstName} {content.contactProfiles[0].lastName}!</h1>
            <p>Born: {content.contactProfiles[0].birthday}</p>
            <img src = {content.contactProfiles[0].profileImage} />
        </div>
        <div>
            <h1>News!</h1>
            <ul>
                <li>
                    <h2>{content.newsArticles[0].title}</h2>
                    <img src = {content.newsArticles[0].img} />
                    <p>{content.newsArticles[0].article}</p>
                </li>
                <li>
                    <h2>{content.newsArticles[1].title}</h2>
                    <img src = {content.newsArticles[1].img} />
                    <p>{content.newsArticles[1].article}</p>
                </li>
                <li>
                    <h2>{content.newsArticles[2].title}</h2>
                    <img src = {content.newsArticles[2].img} />
                    <p>{content.newsArticles[2].article}</p>
                </li>
            </ul>
        </div>
        </>
    )
}