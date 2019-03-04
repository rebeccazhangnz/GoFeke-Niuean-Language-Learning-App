import react from 'react'

class Quiz extends react.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
            
                        <form>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1" checked={true} />
                                    Option 1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option2" />
                                    Option 2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3" />
                                        Option 3
                                    </label>
                                <label>
                                    <input type="radio" value="option4" />
                                        Option 4
                                </label>
                            </div>
                        </form>
            
                    </div>
                 </div>
            </div>
          
        )
    }
} 