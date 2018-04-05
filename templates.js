var templates = {
    page_home : function(data){
        var content = `
            <div id="hello_text">
                <h2>Hello... here's a test home page</h2>
                <p>
                    Thank you for visiting my Single Page Application. I am Marc McKinnis.
                </p>
                <p>
                If you're reading this, then my dynamic rendering of an html page with vanilla javascript was successful!
                </p>
            </div>

<!-- here's my html -->
                <div id="home" class="page-content page1-home">
        <header class="page-header home-header">First things first...</header>

        <div class="page-intro home-intro">

            <p>A little about me. I am a beginning programmer, among many other things. A jack of many trades, of a sort. You can see many of my other skillsets in the "Resume" section. The purpose of this site originally started as an exercise for learning Javascript, and a visual aid for understanding what is happening under the hood in the browser when the code is parsed and executed. I soon realized the need for having a portfolio available for review as well.</p>

            <p>So this site facilitates both of those goals. That being said, please be patient if things are a bit buggy, or inaccessible. Everything you see is vanilla HTML, CSS, and Javascript. I am currently not using any libraries or frameworks, other than my own libraries. In the future my plan is to convert this site into a Single Page Application, with the page content being dynamically loaded upon request, instead of needing entirely different pages. I understand this to mean a decrease in network traffic when navigating the site, and an improvement in interfacing with the site. I intend to do this with vanilla Javascript.</p>

            <p>A lot of code I have is written by me, though there are also plenty of blocks I have acquired along my path of learning Javascript. In the future I will also have a "Code" page, where I will store a lot of tools and projects I have acquired. Feel free to inspect.</p>

        </div>

        <div class="page-about home-about">
            <h1 class="about-header">About Me</h1>

            <div class="about-content">
            <p>My name is Marc McKinnis. I grew up in and currently live in north-eastern Arizona, in the White Mountains. I'm 23 years old.</p>

            <p>I have a wide range of skills, in multiple fields. I spent almost three years as an I.T. Technician at Snowflake Unified School District. I also have several years of experience part-time as a locksmith, working for M&G Locks.</p>

            <p>I currently have one job: working for Dynatrace on the Performance-Frontline team. My duties here include data analysis on synthetic tests for web applications, maintaining and creating scripts, and handling customer requests.</p>

            <p>I enjoy casually playing various instruments. I also am occasionally a live sound technician, and enjoy going to concerts. I also like to play video games (typical, I know).</p>

            <p>I have found that I learn new things some-what differently than most people (from my point-of-view). I learn most effectively when I see the entire process of things (know why I'm doing things the way I'm doing them), and see how tools are used in real situations.</p>
            </div>

        </div>


        <p>Here's some filler text.</p>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis molestie leo. Phasellus eu accumsan quam. Fusce sed tortor ut magna maximus tempus ac vel ex. Morbi in ornare mauris. Pellentesque nec lectus elit. Ut pellentesque sem leo, ut euismod ante condimentum et. In dignissim iaculis metus, ut volutpat nibh.

Praesent nulla libero, mollis a turpis vel, hendrerit vulputate dolor. Maecenas ornare, dui ac tempor dapibus, sapien neque convallis risus, at porta purus massa sed elit. Phasellus quis lobortis sem, ut tempor elit. Nunc laoreet ligula sit amet risus congue, quis aliquet tellus feugiat. Praesent ac purus in elit convallis elementum et nec metus. Etiam lobortis finibus venenatis. Sed sed diam nisi. Quisque tempus, sem sit amet scelerisque pretium, mauris mi feugiat quam, vitae consectetur dui sem non urna. Etiam sed metus sed nisl laoreet commodo. Morbi gravida enim velit, in ullamcorper nisl elementum blandit. Suspendisse arcu orci, ultrices non quam eu, sagittis viverra purus. Nulla hendrerit vehicula lectus eu eleifend. Quisque malesuada faucibus lectus, ullamcorper volutpat nunc feugiat at. In mollis facilisis fringilla.

Sed id nisl molestie, aliquet sapien nec, tincidunt tellus. Mauris sed tempus lorem. Donec malesuada facilisis mi, sed dapibus libero pharetra sed. Donec ultricies blandit urna, vel pellentesque tortor convallis sed. Maecenas sed odio ut massa ullamcorper feugiat. In volutpat, sem ac dapibus faucibus, enim massa pellentesque nisl, nec vulputate ex lectus ut libero. Etiam nec hendrerit augue, ut pulvinar magna. Maecenas nisi sem, ullamcorper eget luctus sit amet, rhoncus pellentesque odio. Vivamus euismod ipsum id volutpat commodo. Duis et volutpat velit. Fusce mauris odio, euismod id cursus sit amet, luctus eleifend sem.

Morbi eget sagittis lorem. Maecenas pellentesque ex nec maximus vulputate. Ut ultricies, enim at tristique egestas, diam arcu dictum nibh, ut tempus libero nisl accumsan velit. Sed consectetur libero non imperdiet semper. Etiam cursus volutpat lectus id ultrices. Nunc eros ligula, blandit in varius vel, interdum at mauris. Donec sem urna, mollis et sapien et, varius ultricies massa.

Donec sollicitudin nibh nec lacus accumsan, eget aliquam ex mollis. Curabitur et velit quis ipsum pretium aliquet nec at odio. Etiam vel ipsum scelerisque, dictum leo eget, vehicula arcu. Aliquam sit amet magna lacus. Pellentesque bibendum a lorem a pellentesque. Nam sit amet aliquam ligula. Sed vel nisl laoreet, consectetur dolor ac, tincidunt urna. Praesent suscipit mauris et purus lobortis, ut egestas sem sollicitudin. Maecenas aliquam condimentum nisi eget lobortis. Aenean condimentum, orci a porta dapibus, orci urna facilisis magna, quis vestibulum sapien erat quis nisi.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada venenatis tortor, sed tincidunt turpis maximus sodales. Duis eget lorem placerat, blandit quam eget, fermentum felis. Curabitur pretium ligula libero, in vulputate justo molestie in. Donec vestibulum enim quis magna feugiat placerat. Donec ac turpis ligula. Maecenas a lorem aliquet, tempor orci ac, efficitur lorem. Ut id dolor eget purus luctus iaculis auctor nec nisi.

Vivamus faucibus sapien at velit euismod, et posuere massa pellentesque. Cras venenatis erat eget nunc suscipit vehicula. Fusce accumsan nibh vel risus placerat aliquet. Phasellus aliquet, leo viverra mattis rhoncus, enim velit ultricies risus, ut elementum augue leo vitae nunc. Quisque sit amet tincidunt orci, eget volutpat nulla. In mattis, quam in venenatis fermentum, sem est cursus erat, non ultrices metus dui vitae lacus. Pellentesque quis ante lacinia, maximus dolor a, egestas risus. Duis eget mattis nisl. Duis ac porttitor eros, a volutpat neque. Aliquam non ligula dignissim, luctus enim mattis, pulvinar neque. Curabitur in nisl eu turpis laoreet aliquet luctus ac velit. Duis placerat nulla quis nisl commodo, eget dictum nisi tempus. Curabitur massa purus, porta vel nisl nec, pulvinar finibus neque.

Proin vel rhoncus neque. In fermentum sit amet mi in hendrerit. Duis interdum, lectus ut sagittis tempus, sapien nisi eleifend purus, nec tincidunt tellus purus vitae leo. Donec at lobortis felis. Fusce eleifend pretium ligula, eu imperdiet sapien fermentum ut. Nunc neque tellus, vulputate id sem non, luctus lacinia libero. Vivamus facilisis, nibh non pellentesque aliquet, velit nisl placerat urna, dapibus rhoncus orci leo id tortor.

Donec consectetur dui sit amet feugiat ultrices. Nunc dignissim est est, ut consectetur velit porta in. Sed consectetur, nibh id interdum interdum, metus nisl consectetur arcu, eu sollicitudin erat nibh et ipsum. Suspendisse non eros eget velit aliquet tincidunt sit amet vitae magna. Proin id justo turpis. Nullam ac purus quis odio ornare consequat. Nulla placerat congue iaculis. Phasellus pharetra nec diam et convallis. Quisque sed justo ultrices, blandit nisl in, mollis tellus. Sed eu nisi nec ex ornare luctus. Proin quis nunc id enim viverra egestas. Proin fermentum tellus a nunc condimentum feugiat. Integer condimentum justo a erat blandit, ut finibus massa laoreet. Aliquam fermentum tempor malesuada. Phasellus sed nunc orci. Vestibulum vel turpis vel nulla pharetra efficitur id at quam.

Donec sit amet cursus elit. Aliquam erat volutpat. Suspendisse tempor facilisis nisl, sed malesuada tortor rhoncus eu. Duis posuere justo massa, eget elementum nisi eleifend sed. Vestibulum consequat venenatis pellentesque. Proin ut sodales ante, sed pulvinar sem. Vestibulum maximus euismod tortor vitae elementum. Cras ac tellus vestibulum, blandit metus nec, vestibulum lorem. Morbi sit amet dolor leo. Cras dui ex, luctus ut facilisis in, ornare in magna. Nunc vel dapibus erat. Suspendisse nibh sapien, cursus non sodales a, pretium quis ipsum. Nulla consectetur feugiat ipsum et ullamcorper. Quisque vestibulum nunc nisl, sit amet cursus ante maximus ac. Proin scelerisque cursus lectus sed tempus.

In hac habitasse platea dictumst. Ut molestie sapien eget quam iaculis, eget iaculis tellus sodales. Pellentesque ligula elit, lobortis at tincidunt non, feugiat non justo. Sed a lorem pulvinar, lacinia neque ut, euismod sapien. Mauris elit nunc, sollicitudin vitae arcu id, porta congue metus. Nullam vulputate aliquet nulla eget placerat. Suspendisse vel euismod neque. Pellentesque semper dolor vitae odio bibendum tristique.

Nullam ultricies dictum massa quis condimentum. Vivamus at diam ac ante sagittis sodales. Sed porttitor mollis ante, ac commodo arcu tincidunt id. Quisque vitae velit ut turpis condimentum iaculis. Aliquam sed quam vitae neque sagittis tincidunt quis quis dui. In commodo dolor ut tincidunt mollis. Vivamus nec mauris ut risus dapibus congue ut a tortor. Phasellus bibendum tincidunt mattis. Vestibulum malesuada arcu vel ligula sodales, eu placerat elit sollicitudin. Donec elementum leo elit, ut tristique nibh viverra nec. Curabitur nec ullamcorper mi, sit amet ultricies orci. Nam id mauris a mauris blandit consectetur nec ac diam. Integer nisi elit, iaculis a metus eu, malesuada molestie leo.

Sed bibendum nulla et velit posuere sodales. Vivamus sollicitudin purus sed enim bibendum eleifend. Etiam imperdiet mauris at lectus ullamcorper, id congue ipsum consequat. Aliquam feugiat dictum metus. Suspendisse pulvinar lacinia rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, neque quis euismod dictum, tellus velit porta velit, a maximus dolor orci vestibulum mauris. Maecenas quis venenatis est. Suspendisse viverra venenatis arcu, eu finibus mauris ullamcorper vel. Aliquam erat volutpat. Proin quis dui auctor, mollis orci non, sodales mi.

Mauris a suscipit sapien. Aliquam non lorem eget libero iaculis imperdiet id id eros. Aliquam vitae erat lacus. Ut sed nunc congue, pulvinar ante a, lobortis sem. Maecenas quis pellentesque est. Praesent posuere neque ac nisi lacinia, ac imperdiet dui placerat. Sed accumsan aliquet mi, vel maximus orci ultricies vel. Nullam eget sollicitudin diam. Vivamus vitae dictum dui. Sed id placerat ex. Nullam sodales est accumsan porta tincidunt. Integer porttitor dui id est pharetra, eu condimentum enim eleifend.

Nam malesuada justo et est sagittis ultrices. Suspendisse tempor, sapien eget facilisis cursus, sem nibh vulputate purus, id tempus tellus odio id diam. Morbi arcu ex, volutpat vitae commodo in, pretium sed arcu. Nullam vitae dignissim ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque lectus sit amet orci aliquam sodales. Mauris tincidunt interdum arcu, at gravida ex dictum sed. Curabitur accumsan nibh at mauris tempor ultrices.

Nunc sollicitudin lorem ac porta commodo. Duis vehicula pharetra tellus, nec blandit lectus rhoncus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed sagittis elit, a varius nulla. Suspendisse mollis semper neque, non dapibus urna venenatis in. Suspendisse nibh risus, iaculis id augue quis, consectetur suscipit nisl. Nulla placerat ac massa at ultrices. Etiam sit amet aliquam metus, quis tristique turpis. Nam interdum orci vitae tellus mollis dictum. Donec sagittis volutpat libero, nec pharetra quam scelerisque gravida. Integer vel mi malesuada, molestie magna quis, tincidunt ex. Praesent sit amet laoreet orci. Fusce hendrerit dolor quis magna scelerisque dignissim. Nulla eget lacus interdum tortor posuere venenatis. Nullam pharetra lectus eu ex blandit condimentum. Integer malesuada dui eu ultrices luctus.

Etiam eu mi vulputate, ultricies lectus eget, bibendum velit. Duis nec porttitor est, eu mollis nulla. Sed in venenatis nibh, ut rutrum ante. Nam sed velit lacinia, hendrerit magna at, aliquet ligula. Vivamus convallis porta nibh, eget finibus dui interdum in. Maecenas placerat sodales massa vitae mattis. Nam malesuada orci diam, nec rhoncus neque ultrices ac. In hac habitasse platea dictumst. Ut sed orci eu metus placerat posuere at at nisl. Cras gravida est at cursus tincidunt.

Ut non lacus vitae ipsum venenatis egestas. Morbi sit amet tellus porta quam tincidunt commodo. Phasellus et dolor sollicitudin, laoreet nisl sed, dignissim ligula. Vivamus mi nulla, finibus id dolor in, suscipit ullamcorper risus. Donec augue nisi, tincidunt sed pellentesque vitae, scelerisque eget lectus. Etiam eget rhoncus magna. Integer aliquet lacinia arcu vel egestas.

Vivamus dictum pellentesque congue. Donec pulvinar accumsan faucibus. Donec fermentum, lectus sed posuere tincidunt, libero nisi viverra lorem, in maximus dolor lorem vitae turpis. Phasellus tempor finibus libero, nec imperdiet augue porta sed. Curabitur dignissim posuere lobortis. Curabitur faucibus, est at pretium mattis, est tortor euismod erat, sit amet venenatis neque risus vitae neque. Phasellus eget diam dictum, efficitur enim vitae, imperdiet ex.

Nunc vel luctus lacus, ac vulputate erat. Ut vel imperdiet neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec quis consequat magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ac aliquet ante. Aliquam et ligula tortor. Cras at tempus nunc, quis gravida massa. Etiam pretium sapien sit amet elit cursus sollicitudin. Donec interdum quis ante in rutrum. Suspendisse dolor nisl, molestie eu nisi nec, eleifend pellentesque nisl.

Pellentesque venenatis dolor vitae leo fringilla sollicitudin. Phasellus tortor lorem, tristique sed neque eget, viverra elementum purus. Maecenas justo purus, ornare eu vehicula sit amet, iaculis quis eros. Donec rutrum lectus vitae tortor lobortis gravida. Aliquam erat volutpat. Sed vitae diam mi. Aliquam porttitor vitae risus vitae convallis. Donec varius mi magna, a faucibus diam blandit a. Nam a venenatis ipsum, non eleifend risus. Morbi maximus erat non sagittis venenatis. Aliquam ac dolor nec arcu aliquam vulputate. Morbi massa dolor, euismod maximus blandit quis, tincidunt eu diam.

Vivamus ut metus ut velit ultricies facilisis tincidunt vel nunc. Mauris risus diam, efficitur sed arcu a, euismod viverra nibh. Phasellus pretium mauris a turpis egestas gravida. Nullam eu neque ut arcu vestibulum condimentum id vitae eros. Quisque volutpat congue nulla, quis dapibus massa maximus sit amet. Sed urna elit, porttitor vitae mauris id, molestie rutrum eros. Fusce volutpat laoreet ornare. Aliquam luctus varius arcu, vel interdum nisl consequat ac. Nulla rutrum, tortor vel congue iaculis, lectus nibh semper sapien, at malesuada odio libero vel ex. Nam pellentesque sapien id ipsum luctus, vitae lobortis purus placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat dui a justo fermentum efficitur. Mauris lacinia dolor at tortor gravida viverra. Aenean gravida fermentum tortor faucibus finibus.

Pellentesque faucibus, sapien ut posuere pellentesque, odio eros auctor turpis, in mollis neque nibh quis orci. Donec sit amet massa tempor, eleifend sem nec, vehicula dolor. Aliquam sodales sed purus eget suscipit. Vivamus at tincidunt elit. Morbi tincidunt volutpat leo at auctor. Duis at egestas magna, ut viverra nibh. Morbi eleifend mauris enim, viverra sollicitudin magna lobortis vel. Suspendisse convallis mauris quis ligula dictum, non rhoncus augue porta. Sed auctor, metus a venenatis mattis, diam ex pharetra ipsum, laoreet gravida lorem ligula eget purus. Ut cursus augue at malesuada euismod. Vivamus commodo eros eu diam molestie, vitae fringilla urna malesuada.

Mauris feugiat felis augue, at dapibus ex convallis eu. Donec non euismod mi. Pellentesque eget feugiat eros, at imperdiet eros. Nunc ullamcorper felis quis augue dignissim, elementum elementum diam molestie. Donec placerat, dui non maximus dapibus, est dui feugiat lacus, eu mollis nisi magna at risus. Cras facilisis ac elit et feugiat. Vivamus sem nisi, auctor nec porta at, dignissim sed arcu. Phasellus ac varius nunc, sit amet semper lacus. Sed mollis semper eleifend. Integer sed massa at orci convallis consequat. In feugiat sollicitudin ornare. Nullam eget sodales augue. Fusce tincidunt sollicitudin nisl, non tristique erat tincidunt scelerisque. Phasellus rutrum at quam quis interdum.

Nam sollicitudin pharetra diam, quis tempus dui viverra in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc non lorem eu massa feugiat fermentum. Aenean nibh massa, suscipit at finibus eget, mattis non tellus. Sed diam ex, ullamcorper et enim et, consectetur blandit magna. Suspendisse vitae varius nibh. Donec ornare, dui sed mattis interdum, nunc eros mattis nibh, quis molestie diam mi vitae sem. Vestibulum semper euismod metus sit amet pharetra. Maecenas non libero turpis. Donec pellentesque, turpis dapibus convallis ornare, ipsum lectus tristique nunc, nec tempus massa orci sit amet nulla. Cras interdum tortor quis congue efficitur. Donec eget tortor condimentum ante tristique dictum. Phasellus dolor eros, cursus quis nisi et, varius bibendum turpis.

Maecenas vestibulum nisl et velit hendrerit, at tincidunt purus viverra. Nulla eu diam congue massa viverra rhoncus. Proin malesuada, urna non egestas vulputate, justo enim consectetur augue, eu tempus justo arcu sed mi. In mollis facilisis ligula quis efficitur. Quisque eleifend tortor libero, et varius augue tincidunt at. Mauris tristique sagittis faucibus. Nullam non tempus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Suspendisse odio turpis, condimentum non ullamcorper at, tempor quis elit. Donec sit amet blandit tortor. Nam hendrerit lectus eget tincidunt facilisis. Ut faucibus ante in lacus consectetur sagittis. Nulla eget libero mauris. Donec porta sem ligula. Proin eleifend ligula sed tellus aliquam sollicitudin.

Suspendisse quis vulputate lectus, vitae porta purus. Ut quam lacus, egestas sit amet est eu, molestie euismod tortor. Cras semper lorem ut est commodo volutpat. Sed cursus aliquet metus sit amet pulvinar. Aenean dictum pretium nisl non vehicula. Maecenas eleifend, leo ut feugiat aliquam, metus lectus porta odio, nec posuere urna sapien porttitor quam. In ligula neque, gravida eu nunc sit amet, placerat eleifend ipsum. Pellentesque et commodo diam. Etiam massa magna, convallis et justo varius, placerat hendrerit magna. Aliquam vel consequat ex. Phasellus elementum leo et augue ultricies, sit amet dapibus urna ornare.

Sed convallis libero ut porta commodo. Donec pulvinar arcu lacus, quis dignissim lorem ultrices sit amet. Nunc aliquet scelerisque aliquet. Phasellus eleifend nisi molestie libero bibendum blandit. Ut mattis magna et porttitor suscipit. Nulla tempor ac mauris ut egestas. Nunc porttitor elit ut enim laoreet, quis feugiat risus tincidunt. Maecenas rhoncus laoreet interdum. Etiam ex nunc, lacinia ornare mollis ut, iaculis ac turpis.

Mauris lacinia tempus lectus vel dapibus. Ut tincidunt justo ut interdum pellentesque. Donec in sapien ligula. Etiam ut velit quam. Nulla sagittis tellus est, vel scelerisque enim euismod nec. Pellentesque eget bibendum elit. Phasellus volutpat cursus lorem, vitae cursus neque luctus non. Fusce eget dui purus. In ultrices semper nisi, id sagittis orci dictum nec.

Generated 25 paragraphs, 2125 words, 14366 bytes of Lorem Ipsum</p>
    </div>
        `;

        return content;
    }
}