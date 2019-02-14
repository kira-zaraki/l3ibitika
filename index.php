<style>
 #form-parse{
    width: 500px;
    margin: 0 auto;
    position: relative;
    top: 40%;
}
 #form-parse input{
    height: 80px;
    font-size: 24px;
}
 #form-parse input[type='submit']{
 	width: 100px;
    background: whitesmoke;
    border: 0;
    cursor: hand;
    color: #967e7e;
}
 #form-parse input[type='text']{
    border: 0.5px #e6e6e6 solid;
 	width: 300px;
    background: whitesmoke;
    border: 0;
    cursor: hand;
    color: #967e7e;
    padding-left: 20px;
}
.selected{
	border: 1px solid gray !important;
}
</style>
<?php 
	@include 'https://www.'.$_GET['url'];
 ?> 
 <?php if (empty($_GET['url'])): ?>
	 <form action="" id="form-parse">
		 <input type="text" name="url" placeholder="https://www">
		 <input type="submit" name="" id="url-parse">
	 </form>
 <?php endif ?>
 <script src="js/app.js"></script>