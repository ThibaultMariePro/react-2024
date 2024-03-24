
## ressources:
[Le hook useEffect - GRAPHIKART](https://grafikart.fr/tutoriels/react-hook-useeffect-1328)
[course useEffect - YT](https://www.youtube.com/watch?v=vNLwY2UlbQg&list=PLjwdMgw5TTLUEOKPg5Z5TgwAOeWkjGL69&index=9)

## important: 
+ useEffect hooks are for global state mngt
+ they trigger callback func on change in dependencies
+ useEffect hooks must be clean using a remove function
  (like removeEventListener, clearInterval )
+ useEffect must not contain setters at their root
+ not very great practice to use them, must be rare