<template>
  <div class="blg-add-comment">
    <h5>Comment Form</h5>

    <form action method="post">
      <div class="row" style="margin-left: 0;">
        <div class="col-lg-12 blg-add-comment-input">
          <input type="text" placeholder="Full Name" />
        </div>
        <div class="col-lg-12 blg-add-comment-input">
          <input type="text" placeholder="E-mail" />
        </div>
        <div class="col-lg-12 blg-add-comment-input">
          <input type="text" placeholder="Website" />
        </div>

        <div class="col-lg-12 blg-add-comment-textarea" style="padding: 0;">
          <textarea rows="8" placeholder="Message"></textarea>
        </div>

        <div class="col-lg-12 blg-add-comment-button" style="padding: 0;">
          <button>Send</button>
        </div>
      </div>
    </form>
  </div>
</template>
