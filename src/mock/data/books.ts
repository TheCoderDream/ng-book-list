
export interface IBook {
  id: string;
  title: string;
  author?: string;
  category: string;
  coverImageUrl: string;
  description?: string;
}

export interface IBookCategory {
  category: string;
  id: string;
}

export let mockBooks: IBook[] = [
  {
    "id": "1Y98CgAAQBAJ",
    "title": "The Romance of the Patchwork Quilt in America in Three Parts - History and Quilt Patches - Quilts, Antique and Modern - Quilting and Quilting Designs",
    "author": "Various",
    "coverImageUrl": "http://books.google.com/books/content?id=1Y98CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "This vintage book contains a complete handbook on quilting in three parts: “History and Quilt Patches”, “Quilts—Antique and Modern”, and “Quilting and Quilting Designs”. A detailed and fascinating exploration of the history and development of quilting, this is a volume that will appeal to those with an interest in the textile industry, and one that would make for a fantastic addition to any collection. Contents include: “Origin and History of Quilt-making with Photographic Reproduction of Patches”, “The Romance of Patchwork”, “Quilt Names”, “The Quilting Bee”, “The Quilt's Place in Art”, “The Quilt in the Twentieth Century”, “Historical Quilts from Recent Exhibitions”, “Gleanings from Old Scrapbooks”, “How to Make a Quilt”, “Reproductions of Quilt Patches”, etc. Many vintage books such as this are becoming increasingly scarce and expensive. We are republishing this volume now in an affordable, high-quality edition complete with a specially commissioned new introduction on quilting.",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "akqQEAAAQBAJ",
    "title": "Quilting Modern",
    "author": "Jacquie Gering",
    "coverImageUrl": "http://books.google.com/books/content?id=akqQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "From two pioneers of today's modern quilting movement, Quilting Modern teaches quilters how to use improvisational techniques to make graphic, contemporary quilts and quilted projects. Explore seven core techniques and multiple projects using each technique--all presented with detailed instructions. Also included is step-by-step direction from Jacquie Gering and Katie Pedersen on tools, materials, and quilting basics, as well as expert advice on color and design. New and seasoned quilting artists will love making stunning bed, wall hanging, pillowcase, and table accessory quilts with this must-have resource. Quilting Modern is a field guide for quilters who strive to break free from tradition and yearn to explore improvisational work. Quilters can make the 21 projects in the book, but will also come away with the new knowledge and skills to apply to their own unique designs. In Quilting Modern, quilters will find the support, structure, and encouragement they need to explore their own creativity and artistic vision.",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "hU8uuQEACAAJ",
    "title": "Beginner's Guide to Quilting",
    "author": "Elizabeth Betts",
    "coverImageUrl": "http://books.google.com/books/content?id=hU8uuQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "OTl0ruzGt1AC",
    "title": "The Complete Photo Guide to Art Quilting",
    "author": "Susan Stein",
    "coverImageUrl": "http://books.google.com/books/content?id=OTl0ruzGt1AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "\"\"Reference book covering all techniques used for making art quilts with myriad photographic examples of finsihed quilts\"--Provided by publisher\"--",
    "category": "CRAFTS & HOBBIES"
  },
  {
    "id": "rzHjAQAACAAJ",
    "title": "New Ideas for Lap Quilting",
    "author": "Georgia Bonesteel",
    "coverImageUrl": "http://books.google.com/books/content?id=rzHjAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "Offers traditional and contemporary designs and step-by-step instructions for quilts, jackets, pillows, and table skirts and demonstrates innovative lap quilting techniques",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "hSkGEAAAQBAJ",
    "title": "Thread Painting a Garden Quilt",
    "author": "Joyce Hughes",
    "coverImageUrl": "http://books.google.com/books/content?id=hSkGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "From free motion quilting to adding borders and sashing to blocks, experienced quilters will learn several techniques for thread painting using raw edge applique. Showing each step for building the quilt, how to thread paint with various embellishments, blocking, squaring, finishing the quilt, and so much more, step-by-step instructions and coordinating photography will guide readers through to the completion of a beautiful thread painted quilt. Written by Joyce Hughes, and award-winning quilter, designer, teacher, and author of Creating Art Quilts with Panels.",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "v0IlDwAAQBAJ",
    "title": "Intuitive Color & Design",
    "author": "Jean Wells",
    "coverImageUrl": "http://books.google.com/books/content?id=v0IlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "In this updated edition of best-selling Intuitive Color & Design, Jean's workshop assignments get your creative juices flowing, giving you challenges to expand your quilting horizons. Start by learning to see line and color; study the nuts and bolts of design; develop your color work and composition; and when you get stuck, there's expert advice on problem solving. Design and piece spectacular, free-form quilts you'd never have guessed you could create!",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "KGbIDwAAQBAJ",
    "title": "Quilting Techniques for Beginners",
    "author": "Elizabeth Betts",
    "coverImageUrl": "http://books.google.com/books/content?id=KGbIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "A concise guide to the basics of quiltmaking—includes helpful color photos. Start by learning: · The basics of piecing · How to use a rotary cutter · How to make a quilt sandwich · Binding your new project! An easy-to-follow guide for anyone looking to start a new hobby, Quilting Techniques for Beginners can have you quilting in no time!",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "k558CgAAQBAJ",
    "title": "Traditional Quilting - Its Story And Its Practice",
    "author": "Mavis Fitzrandolph",
    "coverImageUrl": "http://books.google.com/books/content?id=k558CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "This vintage book provides a detailed history and overview of the quilting industry, exploring its routes, developments, popularity, and revival. It also provides extensive descriptions and explanations as to how quilts have been produced, making it ideal for those with an interest in traditional quilt making. Contents include: “The Background”, “The Quilters”, “The Work of the Rural Industries Bureau in Reviving and Developing the Quilting Industry”, “How Quilts are Made”, “The Materials”, “The Patterns”, “The Uses of Quilting”, “The Future of Traditional Quilting”, “References to Quilting From the Fifteenth to Eighteenth Century”, etc. Many vintage books such as this are increasingly scarce and expensive. It is with this in mind that we are republishing this volume now in an affordable, modern, high-quality edition complete with a specially-commissioned new introduction on quilt making.",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "ouxXXwAACAAJ",
    "title": "Country Cottage Quilting",
    "author": "Lynette Anderson",
    "coverImageUrl": "http://books.google.com/books/content?id=ouxXXwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "Learn how to make gorgeous quilting, patchwork, applique and sewing projects with Country Cottage Quilting, from bestselling author and fabric designer Lynette Anderson. Lynette's country cottage garden provides the inspiration for this collection of 15 beautiful projects, from quick-to-stitch applique designs that make ideal gifts to larger wall hangings and bed-sized quilt patterns. The stunning designs combine charming hand embroidery with traditional patchwork and quilting techniques. Beautiful fabrics, warm colours and a homely feel are enhanced by a book design that captures Lynette's heart-warming, quirky style. Inside Country Cottage Quilting: Patchwork and Applique Projects ? 15 projects for you to make at home, from quilts and cushions to wall hangings, scissor keepers and sewing cases. Techniques ? all the sewing, patchwork and applique techniques you need to know to make the projects. In this book you will learn about sewing seams, pressing work, needle-turn applique, English paper piecing, how to make yo yos, how to quilt, and more, and you will also find a comprehensive guide to all of the embroidery stitches that Lynette uses.",
    "category": "Crafts & Hobbies"
  },
  {
    "id": "u13hVoYVZa8C",
    "title": "Planning Extreme Programming",
    "author": "Kent Beck",
    "coverImageUrl": "http://books.google.com/books/content?id=u13hVoYVZa8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "Without careful ongoing planning, the software development process can fall apart. Extreme Programming (XP) is a new programming discipline, or methodology, that is geared toward the way that the vast majority of software development projects are handled -- in small teams. In this new book, noted software engineers Kent Beck and Martin Fowler show the reader how to properly plan a software development project with XP in mind. The authors lay out a proven strategy that forces the reader to plan as their software project unfolds, and therefore avoid many of the nasty problems that can potentially spring up along the way.",
    "category": "Computers"
  },
  {
    "id": "bIxWAgAAQBAJ",
    "title": "Masterminds of Programming",
    "author": "Federico Biancuzzi",
    "coverImageUrl": "http://books.google.com/books/content?id=bIxWAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "Masterminds of Programming features exclusive interviews with the creators of several historic and highly influential programming languages. In this unique collection, you'll learn about the processes that led to specific design decisions, including the goals they had in mind, the trade-offs they had to make, and how their experiences have left an impact on programming today. Masterminds of Programming includes individual interviews with: Adin D. Falkoff: APL Thomas E. Kurtz: BASIC Charles H. Moore: FORTH Robin Milner: ML Donald D. Chamberlin: SQL Alfred Aho, Peter Weinberger, and Brian Kernighan: AWK Charles Geschke and John Warnock: PostScript Bjarne Stroustrup: C++ Bertrand Meyer: Eiffel Brad Cox and Tom Love: Objective-C Larry Wall: Perl Simon Peyton Jones, Paul Hudak, Philip Wadler, and John Hughes: Haskell Guido van Rossum: Python Luiz Henrique de Figueiredo and Roberto Ierusalimschy: Lua James Gosling: Java Grady Booch, Ivar Jacobson, and James Rumbaugh: UML Anders Hejlsberg: Delphi inventor and lead developer of C# If you're interested in the people whose vision and hard work helped shape the computer industry, you'll find Masterminds of Programming fascinating.",
    "category": "Computers"
  },
  {
    "id": "w4Lo8LmQe3MC",
    "title": "Programming from the Ground Up",
    "author": "Jonathan Bartlett",
    "coverImageUrl": "http://books.google.com/books/content?id=w4Lo8LmQe3MC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "Programming from the Ground Up uses Linux assembly language to teach new programmers the most important concepts in programming. It takes you a step at a time through these concepts: * How the processor views memory * How the processor operates * How programs interact with the operating system * How computers represent data internally * How to do low-level and high-level optimization Most beginning-level programming books attempt to shield the reader from how their computer really works. Programming from the Ground Up starts by teaching how the computer works under the hood, so that the programmer will have a sufficient background to be successful in all areas of programming. This book is being used by Princeton University in their COS 217 \"Introduction to Programming Systems\" course.",
    "category": "Computers"
  },
  {
    "id": "pXDzdJ_1E3oC",
    "title": "Practical C++ Programming",
    "author": "Steve Oualline",
    "coverImageUrl": "http://books.google.com/books/content?id=pXDzdJ_1E3oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "Teaches the programming language, covering topics including syntax, coding standards, object classes, templates, debugging, and the C++ preprocessor.",
    "category": "Computers"
  },
  {
    "id": "ihQ_EAAAQBAJ",
    "title": "Introduction to Microcontroller Programming for Power Electronics Control Applications",
    "author": "Mattia Rossi",
    "coverImageUrl": "http://books.google.com/books/content?id=ihQ_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "Microcontroller programming is not a trivial task. Indeed, it is necessary to set correctly the required peripherals by using programming languages like C/C++ or directly machine code. Nevertheless, MathWorks® developed a model-based workflow linked with an automatic code generation tool able to translate Simulink® schemes into executable files. This represents a rapid prototyping procedure, and it can be applied to many microcontroller boards available on the market. Among them, this introductory book focuses on the C2000 LaunchPadTM family from Texas InstrumentsTM to provide the reader basic programming strategies, implementation guidelines and hardware considerations for some power electronics-based control applications. Starting from simple examples such as turning on/off on-board LEDs, Analog-to-Digital conversion, waveform generation, or how a Pulse-Width-Modulation peripheral should be managed, the reader is guided through the settings of the specific MCU-related Simulink® blocks enabled for code translation. Then, the book proposes several control problems in terms of power management of RL and RLC loads (e.g., involving DC-DC converters) and closed-loop control of DC motors. The control schemes are investigated as well as the working principles of power converter topologies needed to drive the systems under investigation. Finally, a couple of exercises are proposed to check the reader’s understanding while presenting a processor-in-the loop (PIL) technique to either emulate the dynamics of complex systems or testing computational performance. Thus, this book is oriented to graduate students of electrical and automation and control engineering pursuing a curriculum in power electronics and drives, as well as to engineers and researchers who want to deepen their knowledge and acquire new competences in the design and implementations of control schemes aimed to the aforementioned application fields. Indeed, it is assumed that the reader is well acquainted with fundamentals of electrical machines and power electronics, as well as with continuous-time modeling strategies and linear control techniques. In addition, familiarity with sampled-data, discrete-time system analysis and embedded design topics is a plus. However, even if these competences are helpful, they are not essential, since this book provides some basic knowledge even to whom is approaching these topics for the first time. Key concepts are developed from scratch, including a brief review of control theory and modeling strategies for power electronic-based systems.",
    "category": "Technology & Engineering"
  },
  {
    "id": "IDxCIGNjNTYC",
    "title": "Access 2007 VBA Programming For Dummies",
    "author": "Joseph C. Stockman",
    "coverImageUrl": "http://books.google.com/books/content?id=IDxCIGNjNTYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "If you’ve been using Access for a while, you’re probably aware of its power and potential and itching to take advantage of both. Access 2007 VBA Programming For Dummies takes you beyond forms and reports and shows you how to use VBA to create killer Access databases and applications. This gentle introduction to VBA programming covers everything you need to get started, including: Basic programming skills and concepts Explanations of modules, procedures, objects, and arguments Access-unique programming activities, including SQL and recordsets How to use the Visual Basic editor Creating dialog boxes, lists, drop-down menus, and functions Integrating with other Office applications Ready-to-use VBA code examples to type in or copy and paste from the Web Completely revised to reflect all changes found in Microsoft Access 2007, Access 2007 VBA Programming For Dummies gives you access to Access like you’ve never had it before.",
    "category": "Computers"
  },
  {
    "id": "Vlk_AQAAIAAJ",
    "title": "Object-oriented Programming with Prototypes",
    "author": "Günther Blaschek",
    "coverImageUrl": "http://books.google.com/books/content?id=Vlk_AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "Intended for the novice as well as for the experienced programmer who wants to learn more about object-oriented programming. Author is developer of the Omega programming environment. DLC: Object-oriented programming (Computer science)",
    "category": "Computers"
  },
  {
    "id": "2kLADwAAQBAJ",
    "title": "Data Science Programming All-in-One For Dummies",
    "author": "John Paul Mueller",
    "coverImageUrl": "http://books.google.com/books/content?id=2kLADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "Your logical, linear guide to the fundamentals of data science programming Data science is exploding—in a good way—with a forecast of 1.7 megabytes of new information created every second for each human being on the planet by 2020 and 11.5 million job openings by 2026. It clearly pays dividends to be in the know. This friendly guide charts a path through the fundamentals of data science and then delves into the actual work: linear regression, logical regression, machine learning, neural networks, recommender engines, and cross-validation of models. Data Science Programming All-In-One For Dummies is a compilation of the key data science, machine learning, and deep learning programming languages: Python and R. It helps you decide which programming languages are best for specific data science needs. It also gives you the guidelines to build your own projects to solve problems in real time. Get grounded: the ideal start for new data professionals What lies ahead: learn about specific areas that data is transforming Be meaningful: find out how to tell your data story See clearly: pick up the art of visualization Whether you’re a beginning student or already mid-career, get your copy now and add even more meaning to your life—and everyone else’s!",
    "category": "Computers"
  },
  {
    "id": "BOyCSAAACAAJ",
    "title": "Python Programming",
    "author": "John M. Zelle",
    "coverImageUrl": "http://books.google.com/books/content?id=BOyCSAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "\"Introduces computer programming using the Python programming language\"--Provided by publisher.",
    "category": "Programming languages (Electronic computers)"
  },
  {
    "id": "Kjap9ZWcKOoC",
    "title": "Handbook of Constraint Programming",
    "author": "Francesca Rossi",
    "coverImageUrl": "http://books.google.com/books/content?id=Kjap9ZWcKOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "Constraint programming is a powerful paradigm for solving combinatorial search problems that draws on a wide range of techniques from artificial intelligence, computer science, databases, programming languages, and operations research. Constraint programming is currently applied with success to many domains, such as scheduling, planning, vehicle routing, configuration, networks, and bioinformatics. The aim of this handbook is to capture the full breadth and depth of the constraint programming field and to be encyclopedic in its scope and coverage. While there are several excellent books on constraint programming, such books necessarily focus on the main notions and techniques and cannot cover also extensions, applications, and languages. The handbook gives a reasonably complete coverage of all these lines of work, based on constraint programming, so that a reader can have a rather precise idea of the whole field and its potential. Of course each line of work is dealt with in a survey-like style, where some details may be neglected in favor of coverage. However, the extensive bibliography of each chapter will help the interested readers to find suitable sources for the missing details. Each chapter of the handbook is intended to be a self-contained survey of a topic, and is written by one or more authors who are leading researchers in the area. The intended audience of the handbook is researchers, graduate students, higher-year undergraduates and practitioners who wish to learn about the state-of-the-art in constraint programming. No prior knowledge about the field is necessary to be able to read the chapters and gather useful knowledge. Researchers from other fields should find in this handbook an effective way to learn about constraint programming and to possibly use some of the constraint programming concepts and techniques in their work, thus providing a means for a fruitful cross-fertilization among different research areas. The handbook is organized in two parts. The first part covers the basic foundations of constraint programming, including the history, the notion of constraint propagation, basic search methods, global constraints, tractability and computational complexity, and important issues in modeling a problem as a constraint problem. The second part covers constraint languages and solver, several useful extensions to the basic framework (such as interval constraints, structured domains, and distributed CSPs), and successful application areas for constraint programming. - Covers the whole field of constraint programming - Survey-style chapters - Five chapters on applications",
    "category": "Computers"
  },
];

const categoriesMapped = mockBooks.reduce((acc, book, id) => {
  const category = book.category.toLowerCase();
  if (!acc[category]) {
    acc[category] = {
      category,
      id: id + '',
    };
  }
  return acc;
}, {} as Record<string, {category: string, id:string }>);

export const mockCategories = Object.values<IBookCategory>(categoriesMapped);
