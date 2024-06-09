import "./styles.css"

export default function Form() {
    return (
        <>
            <aside>
                <div className="logo">
                    <img src="./odin-lined.png" alt="Odin logo"/>
                    <h1>Odin</h1>
                </div>
            </aside>
            <form>
            <p>This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. <br/>Sign up now to get started.</p>
        <p>You know you want to.</p>
        <fieldset>
            <legend>Let's do this!</legend> 
            <div class="form-row">
                <div class="info">
                    <label for="First Name">First Name</label>
                    <input type="text" id="First Name" name="First Name"/>
                </div>
                
                <div class="info">
                    <label for="Last Name">Last Name</label>
                    <input type="text" id="Last Name" name="Last Name"/>
                </div>
            </div>

            <div class="form-row">
                <div class="info">
                    <label for="Email">Email</label>
                    <input type="email" id="Email" name="Email"/>
                </div>
                
                
                <div class="info"> 
                    <label for="Phone Number">Phone Number</label>
                    <input type="tel" id="Phone Number" name="Phone Number"/>
                </div>
            </div>

            <div class="form-row">
                <div class="info">
                    <label for="Password">Password</label>
                    <input type="password" id="Password" name="Password"/>
                </div>
                
                <div class="info">
                    <label for="Confirm Password">Confirm Password</label>
                    <input type="password" id="Confirm Password" name="Confirm Password"/>
                </div>
            </div>
        </fieldset>
            </form>
        </>
    )
}