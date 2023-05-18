const data = [
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Ужасы",
        rating: 5.0
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Комедия",
        rating: 3.14
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Комедия",
        rating: 7.0
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Ужасы",
        rating: 8.8
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Мелодраммы",
        rating: 4.9
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Мелодраммы",
        rating: 1.4
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "imgs/MJM7r1G-djw.jpg",
        genre: "Мелодраммы",
        rating: 0.5
    }
]

var values = []

class MovieListDTO
{
    title;
    description;
    image;
    genre;

    constructor(title, description, image)
    {
        this.title = title;
        this.description = description;
        this.image = image;
        //this.genre = genre;
    }
}

class FilterDTO
{
    genre;
    rating;

    constructor(genre, rating)
    {
        this.genre = genre;
        this.rating = rating;
    }
}

class RenderTemplate
{
    cardMovie;
    cardShow;

    constructor()
    {
        this.cardMovie = `
            <div class="col-3 mt-5">
                <div class="card w-90 mx-auto">
                    <img src="$image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">$title</h5>
                        <p class="card-text">$description</p>
                        <a href="#" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        `;
        this.cardShow = `
            <div class="col-6">
                <img src=$image class="img-fluid">
            </div>
            <div class="col-6">
                <h4>$title</h4>
                <hr>
                <p>$description</p>
            </div>
        `
    }
    renderAll(context)
    {
        for (let x=0; x < context.length; x++)
        {
            // Описание контекста данных
            let movieContext = new MovieListDTO(
                context[x].title, 
                context[x].description,
                context[x].image
            )
            // Описание шаблона
            let template = this.cardMovie
                .replace("$image", movieContext.image)
                .replace("$description", movieContext.description)
                .replace("$title", movieContext.title)
            // Рендер на страницу
            document.getElementById("app")
                .innerHTML += template
        }
    }

    renderShow(context)
    {
        let movieContext = new MovieListDTO(
            context.title,
            context.description,
            context.image
        )

        let template = this.cardShow
            .replace("$image", movieContext.image)
            .replace("$description", movieContext.description)
            .replace("$title", movieContext.title)

        document.getElementById("app").innerHTML += template
    }
}

class Filter 
{
    getFilter()
    {
        values = null
        values = data 
        new RenderTemplate().renderAll(values) 
    }
    getRatingFilter()
    {
        values = null

        for(var i = 0; i < data.length - 1; i--)
        {
            for(var x = 0; x < data.length; x++)
            {
                if(data[i].rating > data[x].rating)
                {
                    console.log(data[i].rating)
                    console.log(data[x].rating)
                }
            }
        }
    }
    getGenreFilter()
    {

    }
    run(param )
    {
        switch(param)
        {
            case param.gere != "null" && param.rating != null:
                this.getFilter
                break;
            case param.gere != "null" && param.rating == null:
                //...
                break;
            case param.gere == "null" && param.rating != null:
                //...
                break;

            default:
                break;
        }
    }
}