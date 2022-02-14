const sliders = document.querySelectorAll(".sliderbox")
var scrollPerClick = 520;
var scrollAmount = 0;

function sliderScrollLeft(index)
{
    sliders[index].scrollTo(
        {
            top: 0,
            left: (scrollAmount -= scrollPerClick),
            behavior: "smooth"
        }
    );

    if(scrollAmount < 0)
    {
        scrollAmount = 0
    }
}

function sliderScrollRight(index)
{
    if(scrollAmount <= sliders[index].scrollWidth - sliders[index].clientWidth)
    {
        sliders[index].scrollTo(
            {
                top: 0,
                left: (scrollAmount += scrollPerClick),
                behavior: "smooth"
            }
        );
    }
}