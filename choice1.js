

function end(state) {
	var points=0;

	if(state.feathers==true)
		points+=5;

	if(state.rocks==true)
		points-=4;

	if(state.brownMushrooms==true)
		points+=5;

	if(state.redMushrooms==true)
		points-=5;

	if(state.nest==true)
		points+=5;

	if(state.flowers==true)
		points+=7;

	if(state.lilyPads==true)
		points+=2;

	if(state.mud==true)
		points-=4;

	if(state.eggs==true)
		points+=7;

	if(state.leaves==true)
		points+=5;

	if(state.fallenLeaves==true)
		points-=5;

	if(state.grass==true)
		points+=3;

	if(state.nut==true)
		points+=5;

	if(state.furr==true)
		points+=5;

	if(state.sap==true)
		points+=7;


	console.log(points);

	if(points>=29)
		return true;
	else
		return false;
}