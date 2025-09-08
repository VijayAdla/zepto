function allClick(){
    document.getElementById("content-visible").innerHTML="";
    const str=`
        <p class="fresh">Fresh Fruits and Vegetables</p>
            <div class="inside-content">
                <div class="all">
                    <div class="inside-image">
                        <img class="mg" src="./inside assets/coriander.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">37% <br> Off</p>
                    </div>
                    <p class="con">Celery</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹52</b><span>₹83</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/drumstick.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">21% <br> Off</p>
                    </div>
                    <p class="con">Drumstick</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹30</b><span>₹45</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/mirchi.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">6% <br> Off</p>
                    </div>
                    <p class="con">Mirchi</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹32</b><span>₹38</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/lemons.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">4% <br> Off</p>
                    </div>
                    <p class="con">Lemons</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹50</b><span>₹65</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/onions.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">30% <br> Off</p>
                    </div>
                    <p class="con">Onions</p>
                    <p class="con">1 Kg</p>
                    <p class="con"><b>₹30</b><span>₹39</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/tomatoes.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">54% <br> Off</p>
                    </div>
                    <p class="con">Tomatoes</p>
                    <p class="con">1 Kg</p>
                    <p class="con"><b>₹35</b><span>₹50</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/loose garlic.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">53% <br> Off</p>
                    </div>
                    <p class="con">Loose garlic</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹45</b><span>₹55</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/capsi.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">12% <br> Off</p>
                    </div>
                    <p class="con">Capsicum</p>
                    <p class="con">500 g</p>
                    <p class="con"><b>₹40</b><span>₹47</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/garlic.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">37% <br> Off</p>
                    </div>
                    <p class="con">Garlic</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹50</b><span>₹66</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./vegis/unknow.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">31% <br> Off</p>
                    </div>
                    <p class="con">Celery</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹52</b><span>₹60</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                    <div class="inside-image">
                        <img class="mg"  src="./inside assets/coriander.jpeg">
                        <img class="mg1" src="./assets/offer-tag.svg">
                        <p class="offer">48% <br> Off</p>
                    </div>
                    <p class="con">Coriander</p>
                    <p class="con">200 g</p>
                    <p class="con"><b>₹52</b><span>₹65</span></p>
                    <p class="button">Add to Cart</p>
                </div>
                <div class="all">
                <div class="inside-image">
                    <img class="mg"  src="./vegis/apples.jpeg">
                    <img class="mg1" src="./assets/offer-tag.svg">
                    <p class="offer">25% <br> Off</p>
                </div>
                <p class="con">Apples</p>
                <p class="con">1 Kg</p>
                <p class="con"><b>₹230</b><span>₹280</span></p>
                <p class="button">Add to Cart</p>
            </div>
            <div class="all">
                <div class="inside-image">
                    <img class="mg"  src="./vegis/canberries.jpg">
                    <img class="mg1" src="./assets/offer-tag.svg">
                    <p class="offer">33% <br> Off</p>
                </div>
                <p class="con">Canberries</p>
                <p class="con">200 g</p>
                <p class="con"><b>₹83</b><span>₹90</span></p>
                <p class="button">Add to Cart</p>
            </div>
            <div class="all">
                <div class="inside-image">
                    <img class="mg"  src="./vegis/guva.jpeg">
                    <img class="mg1" src="./assets/offer-tag.svg">
                    <p class="offer">23% <br> Off</p>
                </div>
                <p class="con">Guva</p>
                <p class="con">1 Kg</p>
                <p class="con"><b>₹120</b><span>₹134</span></p>
                <p class="button">Add to Cart</p>
            </div>
            </div>
    `
    document.getElementById("content-visible").innerHTML=str
}

function freshVegetables(){
    document.getElementById("content-visible").innerHTML=""
    const str=`
       <p class="fresh">Fresh Fruits</p>
        <div class="inside-content">
            <div class="all">
                <div class="inside-image">
                    <img class="mg"  src="./vegis/apples.jpeg">
                    <img class="mg1" src="./assets/offer-tag.svg">
                    <p class="offer">25% <br> Off</p>
                </div>
                <p class="con">Apples</p>
                <p class="con">1 Kg</p>
                <p class="con"><b>₹230</b><span>₹280</span></p>
                <p class="button">Add to Cart</p>
            </div>
            <div class="all">
                <div class="inside-image">
                    <img class="mg"  src="./vegis/canberries.jpg">
                    <img class="mg1" src="./assets/offer-tag.svg">
                    <p class="offer">33% <br> Off</p>
                </div>
                <p class="con">Canberries</p>
                <p class="con">200 g</p>
                <p class="con"><b>₹83</b><span>₹90</span></p>
                <p class="button">Add to Cart</p>
            </div>
            <div class="all">
                <div class="inside-image">
                    <img class="mg"  src="./vegis/guva.jpeg">
                    <img class="mg1" src="./assets/offer-tag.svg">
                    <p class="offer">23% <br> Off</p>
                </div>
                <p class="con">Guva</p>
                <p class="con">1 Kg</p>
                <p class="con"><b>₹120</b><span>₹134</span></p>
                <p class="button">Add to Cart</p>
            </div>
        </div>
    `

    document.getElementById("content-visible").innerHTML=str
}


