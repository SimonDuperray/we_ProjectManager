import React, { Component } from 'react'

class Filters extends Component {
     render() {
          return (
               <div className="filtersRenderCards rows">
                    <div className="filterTitle row">
                         <h3 id="noMgTitleFilters">Filters</h3>
                    </div>
                    <div className="flexRendering">
                         <div>
                              <input 
                                   className="checkboxes"
                                   name="IA"
                                   type="checkbox"
                                   ref="IA"
                                   onChange={ this.filter }
                              />
                              &nbsp;
                              <label for="IA">IA</label>
                         </div>
                         <div>
                              <input 
                                   className="checkboxes"
                                   name="WebSite-App"
                                   type="checkbox"
                                   ref="WebSite-App"
                                   onChange={ this.filter }
                              />
                              &nbsp;
                              <label for="WebSite-App">WebSite-App</label>
                         </div>
                         <div>
                              <input 
                                   className="checkboxes"
                                   name="Software"
                                   type="checkbox"
                                   ref="Software"
                                   onChange={ this.filter }
                              />
                              &nbsp;
                              <label for="Software">Software</label>
                         </div>
                         <div>
                              <input 
                                   className="checkboxes"
                                   name="AppMobile"
                                   type="checkbox"
                                   ref="AppMobile"
                                   onChange={ this.filter }
                              />
                              &nbsp;
                              <label for="AppMobile">AppMobile</label>
                         </div>
                         <div>
                              <input 
                                   className="checkboxes"
                                   name="Autres"
                                   type="checkbox"
                                   ref="Autres"
                                   onChange={ this.filter }
                              />
                              &nbsp;
                              <label for="Autres">Autres</label>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Filters