# InterviewHer

# Inspiration
Our inspiration for this project was actually each other. Being computer science majors, we are familiar with the overwhelming and daunting process of going through interviews.Especially as women in a male dominated field, our prep process also involves having to take into account potential adversities and biases, that are unique to women. These are situations many of our peers have navigated before and hence can provide invaluable insight into how to answer interview questions with such biases in mind. Over discussions we realized how big of a resource our peers are when preparing to apply for jobs and interviews. Our peers have first hand experiences that are relevant and relatable. This led us to the idea of ‘InterviewHer’ a community of peer to peer guidance and support for interview prep.

# What it does
InterviewHer allows women in STEM to upload and access mock interviews. This gives them access to a wide database of peer resources. As a user of InterviewHer you can choose to be a spectator or a participant, whatever suits you. As a participant you can go to a specific interview question and record and upload a video of yourself answering it. As a spectator, you can use InterviewHer as a repository of peer resources and get access to different ways of taking interviews.

# How we built it
We built this website using React and Firebase. We used React.js, HTML and CSS to set up and style our webpages. Using React’s component-based architecture, we were able to create dynamic elements on our website (question cards, submission cards) that responded in tandem with our backend data models. We used Firebase databases to create a backend schema of interview questions with unique IDs and querying. We also used Firebase Storage to store our video uploads, as they are larger files and require a storage solution with greater bandwidth. We also used Node.js and Express to craft a REST API to interface between the client and the server, making sure that our frontend was able to make requests to our backend.

# Challenges we ran into
We ran into several challenges while attempting to implement this website. As none of us had concrete web development experience before this hackathon, we were having trouble coming up with how to put together both frontend and backend components. Using Firebase was also a first for all of us, along with uploading large MP4 files to a storage solution. There was definitely much research involved in this project, but that made it all the more rewarding!

# Accomplishments that we're proud of
The accomplishments we are proud of our being able to create a fully functioning we site from scratch using tools that we had never learned before. We used youtube tutorials to learn React and Firebase from the bottom up, implementing as we go. We were able to achieve this within a limited time of 12 hours which was difficult but exciting feat. We are also proud of how our product promotes the inclusion of women in STEM within academia as well as industry and provides them with resources.

# What we learned
We learned how to use several web development frameworks, including React.js, Express, Node.JS, etc. Firebase data storage and querying a backend database via a custom API was also a learning experience. Moreover, learning how to brainstorm and put together our unique strengths to work efficiently taught us a lot about collaboration!

# What's next for InterviewHer
We plan to add a review feature on our website that will allow users to review other user’s interviews, providing them with detailed feedback and tips. This way we would be able to provide a more interactive community and have more useful insights for our users.
