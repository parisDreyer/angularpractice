// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called businessCards
mongoose.connect('mongodb://localhost/businessCards');
// Create a schema
var businessCardSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    photo_src: String,
    updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var BusinessCard = mongoose.model('businessCard', businessCardSchema);


// Create a businessCard in memory
var businessCard = new BusinessCard({ 
    name: 'sample user', 
    phone: 1234,
    email: 'sampleuser@email.com',
    photo_src: './profiles/default_profile.jpg',
});

// Save it to database
businessCard.save(function (err) {
    if (err)
        console.log(err);
    else
        console.log(businessCard);
});

// https://github.com/dominictarr/random-name/blob/master/first-names.txt
let names = ['Sheila',
'Sheila - Kathryn',
'Sheilah',
'Shel',
'Shela',
'Shelagh',
'Shelba',
'Shelbi',
'Shelby',
'Shelia',
'Shell',
'Shelley',
'Shelli',
'Shellie',
'Shelly',
'Shena',
'Sher',
'Sheree',
'Sheri',
'Sherie',
'Sherill',
'Sherilyn',
'Sherline',
'Sherri',
'Sherrie',
'Sherry',
'Sherye',
'Sheryl',
'Shina',
'Shir',
'Shirl',
'Shirlee',
'Shirleen',
'Shirlene',
'Shirley',
'Shirline',
'Shoshana',
'Shoshanna',
'Siana',
'Sianna',
'Sib',
'Sibbie',
'Sibby',
'Sibeal',
'Sibel',
'Sibella',
'Sibelle',
'Sibilla',
'Sibley',
'Sibyl',
'Sibylla',
'Sibylle',
'Sidoney',
'Sidonia',
'Sidonnie',
'Sigrid',
'Sile',
'Sileas',
'Silva',
'Silvana',
'Silvia',
'Silvie',
'Simona',
'Simone',
'Simonette',
'Simonne',
'Sindee',
'Siobhan',
'Sioux',
'Siouxie',
'Sisely',
'Sisile',
'Sissie',
'Sissy',
'Siusan',
'Sofia',
'Sofie',
'Sondra',
'Sonia',
'Sonja',
'Sonni',
'Sonnie',
'Sonnnie',
'Sonny',
'Sonya',
'Sophey',
'Sophi',
'Sophia',
'Sophie',
'Sophronia',
'Sorcha',
'Sosanna',
'Stace',
'Stacee',
'Stacey',
'Staci',
'Stacia',
'Stacie',
'Stacy',
'Stafani',
'Star',
'Starla',
'Starlene',
'Starlin',
'Starr',
'Stefa',
'Stefania',
'Stefanie',
'Steffane',
'Steffi',
'Steffie',
'Stella',
'Stepha',
'Stephana',
'Stephani',
'Stephanie',
'Stephannie',
'Stephenie',
'Stephi',
'Stephie',
'Stephine',
'Stesha',
'Stevana',
'Stevena',
'Stoddard',
'Storm',
'Stormi',
'Stormie',
'Stormy',
'Sue',
'Suellen',
'Sukey',
'Suki',
'Sula',
'Sunny',
'Sunshine',
'Susan',
'Susana',
'Susanetta',
'Susann',
'Susanna',
'Susannah',
'Susanne',
'Susette',
'Susi',
'Susie',
'Susy',
'Suzann',
'Suzanna',
'Suzanne',
'Suzette',
'Suzi',
'Suzie',
'Suzy',
'Sybil',
'Sybila',
'Sybilla',
'Sybille',
'Sybyl',
'Sydel',
'Sydelle',
'Sydney',
'Sylvia',
'Tabatha',
'Tabbatha',
'Tabbi',
'Tabbie',
'Tabbitha',
'Tabby',
'Tabina',
'Tabitha',
'Taffy',
'Talia',
'Tallia',
'Tallie',
'Tallou',
'Tallulah',
'Tally',
'Talya',
'Talyah',
'Tamar',
'Tamara',
'Tamarah',
'Tamarra',
'Tamera',
'Tami',
'Tamiko',
'Tamma',
'Tammara',
'Tammi',
'Tammie',
'Tammy',
'Tamqrah',
'Tamra',
'Tana',
'Tandi',
'Tandie',
'Tandy',
'Tanhya',
'Tani',
'Tania',
'Tanitansy',
'Tansy',
'Tanya',
'Tara',
'Tarah',
'Tarra',
'Tarrah',
'Taryn',
'Tasha',
'Tasia',
'Tate',
'Tatiana',
'Tatiania',
'Tatum',
'Tawnya',
'Tawsha',
'Ted',
'Tedda',
'Teddi',
'Teddie',
'Teddy',
'Tedi',
'Tedra',
'Teena',
'TEirtza',
'Teodora',
'Tera',
'Teresa',
'Terese',
'Teresina',
'Teresita',
'Teressa',
'Teri',
'Teriann',
'Terra',
'Terri',
'Terrie',
'Terrijo',
'Terry',
'Terrye',
'Tersina',
'Terza',
'Tess',
'Tessa',
'Tessi',
'Tessie',
'Tessy',
'Thalia',
'Thea',
'Theadora',
'Theda',
'Thekla',
'Thelma',
'Theo',
'Theodora',
'Theodosia',
'Theresa',
'Therese',
'Theresina',
'Theresita',
'Theressa',
'Therine',
'Thia',
'Thomasa',
'Thomasin',
'Thomasina',
'Thomasine',
'Tiena',
'Tierney',
'Tiertza',
'Tiff',
'Tiffani',
'Tiffanie',
'Tiffany',
'Tiffi',
'Tiffie',
'Tiffy',
'Tilda',
'Tildi',
'Tildie',
'Tildy',
'Tillie',
'Tilly',
'Tim',
'Timi',
'Timmi',
'Timmie',
'Timmy',
'Timothea',
'Tina',
'Tine',
'Tiphani',
'Tiphanie',
'Tiphany',
'Tish',
'Tisha',
'Tobe',
'Tobey',
'Tobi',
'Toby',
'Tobye',
'Toinette',
'Toma',
'Tomasina',
'Tomasine',
'Tomi',
'Tommi',
'Tommie',
'Tommy',
'Toni',
'Tonia',
'Tonie',
'Tony',
'Tonya',
'Tonye',
'Tootsie',
'Torey',
'Tori',
'Torie',
'Torrie',
'Tory',
'Tova',
'Tove',
'Tracee',
'Tracey',
'Traci',
'Tracie',
'Tracy',
'Trenna',
'Tresa',
'Trescha',
'Tressa',
'Tricia',
'Trina',
'Trish',
'Trisha',
'Trista',
'Trix',
'Trixi',
'Trixie',
'Trixy',
'Truda',
'Trude',
'Trudey',
'Trudi',
'Trudie',
'Trudy',
'Trula',
'Tuesday',
'Twila',
'Twyla',
'Tybi',
'Tybie',
'Tyne',
'Ula',
'Ulla',
'Ulrica',
'Ulrika',
'Ulrikaumeko',
'Ulrike',
'Umeko',
'Una',
'Ursa',
'Ursala',
'Ursola',
'Ursula',
'Ursulina',
'Ursuline',
'Uta',
'Val',
'Valaree',
'Valaria',
'Vale',
'Valeda',
'Valencia',
'Valene',
'Valenka',
'Valentia',
'Valentina',
'Valentine',
'Valera',
'Valeria',
'Valerie',
'Valery',
'Valerye',
'Valida',
'Valina',
'Valli',
'Vallie',
'Vally',
'Valma',
'Valry',
'Van',
'Vanda',
'Vanessa',
'Vania',
'Vanna',
'Vanni',
'Vannie',
'Vanny',
'Vanya',
'Veda',
'Velma',
'Velvet',
'Venita',
'Venus',
'Vera',
'Veradis',
'Vere',
'Verena',
'Verene',
'Veriee',
'Verile',
'Verina',
'Verine',
'Verla',
'Verna',
'Vernice',
'Veronica',
'Veronika',
'Veronike',
'Veronique',
'Vevay',
'Vi',
'Vicki',
'Vickie',
'Vicky',
'Victoria',
'Vida',
'Viki',
'Vikki',
'Vikky',
'Vilhelmina',
'Vilma',
'Vin',
'Vina',
'Vinita',
'Vinni',
'Vinnie',
'Vinny',
'Viola',
'Violante',
'Viole',
'Violet',
'Violetta',
'Violette',
'Virgie',
'Virgina',
'Virginia',
'Virginie',
'Vita',
'Vitia',
'Vitoria',
'Vittoria',
'Viv',
'Viva',
'Vivi',
'Vivia',
'Vivian',
'Viviana',
'Vivianna',
'Vivianne',
'Vivie',
'Vivien',
'Viviene',
'Vivienne',
'Viviyan',
'Vivyan',
'Vivyanne',
'Vonni',
'Vonnie',
'Vonny',
'Vyky',
'Wallie',
'Wallis',
'Walliw',
'Wally',
'Waly',
'Wanda',
'Wandie',
'Wandis',
'Waneta',
'Wanids',
'Wenda',
'Wendeline',
'Wendi',
'Wendie',
'Wendy',
'Wendye',
'Wenona',
'Wenonah',
'Whitney',
'Wileen',
'Wilhelmina',
'Wilhelmine',
'Wilie',
'Willa',
'Willabella',
'Willamina',
'Willetta',
'Willette',
'Willi',
'Willie',
'Willow',
'Willy',
'Willyt',
'Wilma',
'Wilmette',
'Wilona',
'Wilone',
'Wilow',
'Windy',
'Wini',
'Winifred',
'Winna',
'Winnah',
'Winne',
'Winni',
'Winnie',
'Winnifred',
'Winny',
'Winona',
'Winonah',
'Wren',
'Wrennie',
'Wylma',
'Wynn',
'Wynne',
'Wynnie',
'Wynny',
'Xaviera',
'Xena',
'Xenia',
'Xylia',
'Xylina',
'Yalonda',
'Yasmeen',
'Yasmin',
'Yelena',
'Yetta',
'Yettie',
'Yetty',
'Yevette',
'Ynes',
'Ynez',
'Yoko',
'Yolanda',
'Yolande',
'Yolane',
'Yolanthe',
'Yoshi',
'Yoshiko',
'Yovonnda',
'Ysabel',
'Yvette',
'Yvonne',
'Zabrina',
'Zahara',
'Zandra',
'Zaneta',
'Zara',
'Zarah',
'Zaria',
'Zarla',
'Zea',
'Zelda',
'Zelma',
'Zena',
'Zenia',
'Zia',
'Zilvia',
'Zita',
'Zitella',
'Zoe',
'Zola',
'Zonda',
'Zondra',
'Zonnya',
'Zora',
'Zorah',
'Zorana',
'Zorina',
'Zorine',
'Zsa Zsa',
'Zsazsa',
'Zulema',
'Zuzana'];


let randomInts = [];
for(let i = 1; i <= 371; ++i) {
    randomInts.push(
        parseInt(`1${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`)
    )

}


for(let i = 1; i <= 371; ++i){

    // Create a businessCard in memory
    var businessCard = new BusinessCard({
        name: names[i],
        phone: randomInts[i],
        email: `${names[i]}@email.com`,
        photo_src: `./profiles/profile${i}.jpg`,
    });

    // Save it to database
    businessCard.save(function (err) {
        if (err)
            console.log(err);
        else
            console.log(businessCard);
    });

}