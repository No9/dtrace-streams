
#pragma D option quiet

/* Upon starting... */
dtrace:::BEGIN
{
  /* ...formatted print of familiar string... */
  printf("Hell of a world!\n");

  /* ...and exit(); */
}
