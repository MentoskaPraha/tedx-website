<script lang="ts" setup>
    import content from "../assets/content.json";


    let list = content.quotes;

    const quoteNum = Math.floor(Math.random()*list.length);
    const quote = list[quoteNum];
</script>

<template>
<footer>
    <div id="footerQuote">
        <div id="footerQuoteContent">
            <p id="footerQuoteContentField">"{{quote.content}}"</p>
        </div>
        <div id="footerQuoteAuthor">
            <p id="footerQuoteAuthorField">- {{quote.author}}</p> 
        </div>
    </div>

    <ul id="mainFooter">
        <li id="privacyPolicy">
            <h2>Privacy Policy</h2>
            <p>
                This website uses no cookie set by the creator.
                Your activity on this page is not monitored or tracked by the creator.
                The creator is not responsible for cookies managed by 3rd party services,
                such as Firebase, Youtube or others.
            </p>
        </li>

        <li id="copyright">
            <h2>Copyright</h2>
            <p>
                This website was made by MentoskaPraha using VSCode, Github
                and other tools. All static image sources can be found in the README.md file
                on Github. This website is published under the GNU General Public License V3.
            </p>
        </li>
    </ul>
</footer>
</template>

<style scoped>
footer{
    background-color: black;
    color: white;
    text-align: center;
    width: 100%;
}

#footerQuote{
    display: inline-block;
    margin: 10px 30px;
}

#footerQuoteContent{
    font-size: 30px;
    display: inline-block;
}

#footerQuoteContent p{
    display: inline-block;
}

#footerQuoteAuthor{
    margin-left: 170px;
    font-size: 20px;
    font-style: italic;
}

#footerQuoteAuthor p{
    display: inline-block;
}

#mainFooter{
    list-style: none;
}

#mainFooter li{
    display: inline-block;
}

#copyright{
    margin: 10px;
    margin-right: auto;
    padding: 10px;
    vertical-align: top;
    width: 40%;
}

#copyright h2{
    font-size: 35px;
    margin-bottom: 5px;
    text-align: center;
}

#copyright p{
    text-align: justify;
}

#privacyPolicy{
    margin: 10px;
    margin-left: auto;
    padding: 10px;
    vertical-align: top;
    width: 40%;
}

#privacyPolicy h2{
    font-size: 35px;
    margin-bottom: 5px;
}

#privacyPolicy p{
    text-align: justify;
}

@media screen and (max-width: 661px){
    #copyright p{
        text-align: center;
    }

    #privacyPolicy p{
        text-align: center;
    }
}

@media screen and (max-width: 405px){
    #mainFooter li{
        display: block;
    }

    #footerQuoteAuthor{
        margin-left: 100px;
    }

    #copyright{
        margin-left: auto;
        width: 50%;
    }

    #privacyPolicy{
        margin-right: auto;
        width: 50%;
    }
}
</style>