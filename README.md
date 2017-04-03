# ServerExpress

# Ecrire 3 routes:

1- GET/ => 'Home page'
2- GET/users => 'liste d\'utilisateur'
3- GET/users/lenomdelutilisateur => 'le nom de l'utilisateur est : lenomdelutilisateur'

4- GET/users => renvoie une vrai liste d'utilisateur bas sur ce tableau

ex.Michel, Faust, Mathieu

const users = [
{id: 0, firstName: 'Michel'},
{id: 0, firstName: 'Faust'},
{id: 0, firstName: 'Mathieu'}
]

5- GET/users/:id => renvoie le prénom de l'utilisateur qui a cet ID

6- Farie la meme chose en html avec ejs
ex. pour GET/users, il faut renvoyer une liste html (<ul> <li>...)
