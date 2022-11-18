<script lang="ts" setup>
//fix random quotes later
/*
    //on page load run
    window.onload = async function(){
    //get elements from files
    const quotes = await fetch('/scripts/quotes.json').then((response) => response.json());
    const content = document.getElementById('footerQuoteContentField');
    const author = document.getElementById('footerQuoteAuthorField');

    //get a random quote
    let quote = Math.floor(Math.random()*quotes.list.length);
    quote = quotes.list[quote];

    //display that quote
    content.innerHTML = "\"" + quote.content + "\"";
    author.innerHTML = "- " + quote.author;
    
}
*/
</script>

<template>
<footer>
    <div id="footerQuote">
        <div id="footerQuoteContent">
            <p id="footerQuoteContentField">"Knowledge can be passed down through good quotes."</p>
        </div>
        <div id="footerQuoteAuthor">
            <p id="footerQuoteAuthorField">- MentoskaPraha</p> 
        </div>
    </div>

    <ul id="mainFooter">
        <li id="privacyPolicy">
            <h2>Privacy Policy</h2>
            <p>
                This website uses no cookie to the knowledge of the creator.
                Your activity on this page is not monitored or tracked.
                The creator is not responsible for cookies managed by 3rd party services
                that are either linked to or embeded on this site.
            </p>
        </li>

        <li id="copyright">
            <h2>Copyright</h2>
            <p>
                This website was made by MentoskaPraha using VSCode, MS-Paint
                and other tools. All image sources can be found in the README.md file
                on Github. This website is published under the GNU General Public License V3,
                so feel free to borrow my code from Github.
            </p>
        </li>
    </ul>
</footer>
</template>

<style scoped>
footer{
    background-color: black;
    color: white;
    display: inline-block;
    text-align: center;
    width: 100%;
}

#footerQuote{
    margin: 10px;
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

</style>