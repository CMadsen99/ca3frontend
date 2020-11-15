const Home = () => {
    return (
        <div>
            <h2>Welcome page</h2>
            <ul>
                <li>
                    First of all I made the necessary changes to be able to deploy the backend and the frontend.
                </li>
                <li>
                    I then made an address entityclass to add some more information to the user entity and
                    made a DTO to the address plus a facade and an endpoint to fetch from. 
                    The facade method uses the securitycontext to get the users name and from that get the required information from the db.
                </li>
                <li>
                    After that I made the call to an external server, which offers random facts about cats and dogs.
                    As you can see under facts in the navbar.
                </li>
                <li>
                    Finally a few changes to the frontend: moved some of the components around/added some new and added errorhandling to the loginpage.
                </li>
                <div class="lineHorizontal__container">
                    <div class="lineHorizontal"></div>
                </div>
                </ul>
        </div>
    )
};

export default Home;