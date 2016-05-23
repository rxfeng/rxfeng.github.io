/**
 * Created by rxfeng on 2016/5/24.
 */
function gotop(){
    clearInterval(timer);
    timer = setInterval(function () {
        var target = 0;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        window.scrollTo(0, leader);
        console.log(1)
        if (leader == target) {
            clearInterval(timer);
        }
    }, 15);
}