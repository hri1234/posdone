import React, { Suspense , useState } from "react";
// css
// import "./App.css";
// theme
import ThemeConfig from "src/theme";
import GlobalStyles from "src/theme/globalStyles";
// npm
import { BrowserRouter as Router } from "react-router-dom";
// components
import CustomSpinner from "src/Components/spinners/CustomSpinner";
// routes
import RoutesWrap from "./routes/Routes";
import ThankYou  from "./pages/tableBooking/thankYou"

function App() {
  const [page, setPage] = useState(0);
  return (
    <ThemeConfig>
    
      <Router>
       
        <GlobalStyles />
        
        <Suspense fallback={<CustomSpinner fallback={true} />}>
          <RoutesWrap />
        </Suspense>
      </Router>
    </ThemeConfig>
    
    
  );
}

export default App;
