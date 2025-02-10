# Exemple react ROUTER

## 1. installation
- `` npm install react-router-dom ``
## 2. BrowserRouter dans le main.jsx
   ![image](https://github.com/user-attachments/assets/c729c20d-30b2-41b9-9717-29daa621b6aa)

## 3. Routes et Route dans le App.jsx
   ![image](https://github.com/user-attachments/assets/e10c1e3f-185e-478e-b9ba-a97e1d029db1)

- <Route/> a besoin de deux props: "path", le chemin dans l'url et "element", le composant à retourner


## 4. Ancre Classique <Link>

- <Link> remplace les ancres <a>. fournissez lui le path dans son props "to"
![image](https://github.com/user-attachments/assets/b0c27d7a-4aed-4f91-b03a-b76d9a82e4c3)


## 5. Ancre de Navigation 

- Navlink marche comme <Link> mais possède des attributs lui permatant de savoir si vous êtes sur la page en question.
- pour plus d'info, allez consulter la doc officiel: https://v5.reactrouter.com/web/api/NavLink

## 6. useNavigate

- useNavigate est un hook de react router permettant de lancer une fonction qui charge un nouvelle url.
- pour le mettre en place, créez dans votre composant avant le return un const : `` const navigate = useNavigate()``
- ensuite vous pourrez utiliser navigate(path) ou path est un string trouvable dans vos Routes OU -1 si vous voulez revenir en arrière.
  ![image](https://github.com/user-attachments/assets/2564d5b8-2581-4894-9153-d8dfc01e8546)





