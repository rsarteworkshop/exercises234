How to maintain the Exercise solutions for the Traffic Light model
------------------------------------------------------------------

- The solutions to the exercises do exist as zip-files in the Sharepoint site:
  HCL RTist (RSARTE) Training - Exercises - Exercise Solutions
  
- The solutions also exist on GitHub:
  https://github.com/rsarteworkshop/exercises234

A) How to update the model in the Git repository 
   - Import the exercises into a clean workspace
     1. In the Git perspective, "Clone a Git Repository"
	   2. Use the URI: https://github.com/rsarteworkshop/exercises234
	   3. Use the User: rsarteworkshop
	   4. Use the PW: march2018
	   5. Click "Next >"
	   6. Make sure all branches are selected
	   7. Click "Next >"
	   8. Make sure the Desitnation Directory is suitable
	   9. Click "Finish"
	 	 
   - Check out the exercise where you want to introduce a change
     1. In the History View, Check out the Exercise branch where you want to introduce a change
     2. Select "Check out as New Local Branch"
	 
   - Introduce your changes
     1. In the UML Development perspective, perform your changes
	   2. Save your model
	 
   - Propagate the changes to later exercises and commit to GitHub   
	   1.	In the staging View, Stage the changed files and add a suitable Commit message
	   2.	Press the "Commit and Push..." button
	   3.	Check out Next exercise in the order they are done
	   4. Select "Check out as New Local Branch"
	   5.	In the history view, select the commit from step 2 and select Rebase
	   6. Use File-By-File merge and if you get a dialogue, select "Use next commit"
	   7.	In the staging View, Stage the changed files and add a suitable Commit message
	   8.	Press the "Commit and Push..." button
	   9.	Repeat steps 3-8 for all later exercises and the main branch


B) How to create a new solutions-zip files
   - Import the exercises into a clean workspace
     1. In the Git perspective, "Clone a Git Repository"
	   2. Use the URI: https://github.com/rsarteworkshop/exercises234
	   3. Use the User: rsarteworkshop
	   4. Use the PW: march2018
	   5. Click "Next >"
	   6. Make sure all branches are selected
	   7. Click "Next >"
	   8. Make sure the Desitnation Directory is suitable
	   9. Click "Finish"
	 	 
   - Check out the exercise you want to create the zip-file for
     1. In the History View, Check out the Exercise branch where you want to introduce a change
     2. Select "Check out as New Local Branch"
	
   - Create the zip-file
     1. Right-click in the Project Explorer and select "Export..."
	   2. Select "General - Archive File"
	   3. Click "Next >"
	   4. Select all Projects
	   5. Specify th elocation and name of file
	   6. Click "Finish"
