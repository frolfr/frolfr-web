export default function(){
  this.transition(
    this.fromRoute('courses'),
    this.toRoute('users'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('courses'),
    this.toRoute('rounds'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('users'),
    this.toRoute('rounds'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('rounds'),
    this.toRoute('round'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('courses'),
    this.toRoute('course'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('scorecards'),
    this.toRoute('round'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('round'),
    this.toRoute('turns'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
