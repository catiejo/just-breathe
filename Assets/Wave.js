#pragma strict

var anim : Animation;

function Start () {
	anim = GetComponent.<Animation>();
}

function Update () {

}

public function Breathe() {
	anim.Play("breathe_better");
	anim.Play("breathe_better");
	anim.Play("breathe_better");
}