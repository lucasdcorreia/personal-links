
import "./button.css";

interface ButtonProps {
  title: string,
  link: string,
  icon?: string
}

function onClick(link:string){
  window.location.href = link;
}

export function Button ( {title, link, icon} : ButtonProps) {
  return(
    <button className="button" onClick={()=> onClick(link)}>
      <img src={icon} alt="" />
      {title}
    </button>
  )
}