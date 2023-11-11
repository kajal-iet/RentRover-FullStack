import User from "../model/userSchema.js";

export const userLogIn = async (request, response) => {
	console.log();
	try {
		const user = await User.findOne({ email: request.body.email});
        if(!user) {response.status(401).send("Failed Login"); return;}
		if (user) {
			if(user.password!==request.body.password) {response.status(402).send("wrong pass"); return;}
			response.status(200).send(user);
			// return response.status(200).json(user);
		} else {
			response.status(401).send("Failed Login");
			// return response.status(401).json(undefined);
		}
	} catch (error) {
		response.json("Error: ", error.message);
	}
};

export const userSignUp = async (request, response) => {
	try {
		console.log(request.body);
		const exist = await User.findOne({ email: request.body.email });
		if (exist) {
			return response.status(401).json({ message: "User already exist" });
		}
		const user = request.body;
		const newUser = new User(user);
		await newUser.save();
		response.status(200).json({ mesage: user });
	} catch (error) {
		console.log(error);
		response.status(500).json({ message: error.message });
	}
};