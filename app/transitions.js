export default function(){
  this.transition(
    this.fromRoute('rounds'),
    this.toRoute('friends'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('rounds'),
    this.toRoute('users'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('friends'),
    this.toRoute('rounds'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('friends'),
    this.toRoute('users'),
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
