import Layer from "../components/Layer"
import { useAuth } from "../context/authContext";

export default function Home() {

  const { user,usuario } = useAuth();
  console.log(usuario)

  return (
    
    <div>

      <Layer>
        
        <div className=" bg-yellow-200">
          <p>Menu principal</p>
        </div>
       
      </Layer>
      
    </div>
  );
}
