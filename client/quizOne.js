Template.quizOne.events({

	"submit .gitHubInfo": function() { 
			event.preventDefault();
		var project = event.target.projectName.value;
		var  first = event.target.firstName.value;
		var last = event.target.lastName.value;
		var urlMeteor = event.target.meteorUrl.value;
		var repo = event.target.gitHubUrl.value;

		GitHubInfo.insert({
			projectName : project,
			firstName: first,
			lastName: last,
			meteorUrl: urlMeteor,
			repoUrl: repo
		})

		event.target.projectName.value= "";
		event.target.firstName.value= "";
		event.target.lastName.value = "";
		event.target.meteorUrl.value= "";
		event.target.gitHubUrl.value= "";


	},

	"click .deleteProject" : function(event) {
		var getId = this._id;
		console.log(getId);
		// Session.set('selectedProject', getId)

		GitHubInfo.remove(getId)
	}
})

Template.quizOne.helpers({
	displayInfo : function() {return GitHubInfo.find({}, 
		{sort: 
			{ projectName: 1,
				firstName: 1,
				lastName: 1}});}
})