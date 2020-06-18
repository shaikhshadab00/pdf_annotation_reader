<div class="pdf-annotation-reader-container">
  <div id="loader-wrapper">
    <div id="loader"></div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="pdf-annotation-reader-toolbar">
	  <button class="cursor" type="button" title="Cursor" data-tooltype="cursor">➚</button>

	  <div class="spacer"></div>

	  <button class="rectangle" type="button" title="Rectangle" data-tooltype="area">&nbsp;</button>
	  <button class="highlight" type="button" title="Highlight" data-tooltype="highlight">&nbsp;</button>
	  <button class="strikeout" type="button" title="Strikeout" data-tooltype="strikeout">&nbsp;</button>
      <button class="comment" type="button" title="Comment" data-tooltype="point">💬</button>
	  <div class="spacer"></div>
	  <button class="text" type="button" title="Text Tool" data-tooltype="text"></button>
	  <select class="text-size"></select>
	  <div class="text-color"></div>

	  <div class="spacer"></div>
	  <button class="pen" type="button" title="Pen Tool" data-tooltype="draw">✎</button>
	  <select class="pen-size"></select>
	  <div class="pen-color"></div>

	  <div class="spacer"></div>
	  <select class="scale">
	    <option value=".5">50%</option>
	    <option value="1">100%</option>
	    <option value="1.33">133%</option>
	    <option value="1.5">150%</option>
	  </select>
	  <a href="javascript://" class="rotate-ccw" title="Rotate Counter Clockwise">⟲</a>
	  <a href="javascript://" class="rotate-cw" title="Rotate Clockwise">⟳</a>

	  <div class="spacer"></div>
	  <a href="javascript://" class="clear" title="Clear">❌</a>

	  <div class="spacer"></div>
	  <a href="javascript://" class="save" title="Save">💾</a>
	  <div class="spacer"></div>
	  <span id="page-no" title="Current Page No"></span>
	  <span id="total-page-no" title="Total Page No"></span>

	  <div class="spacer"></div>
	  <select class="users"></select>
	  <select class="annotations"></select>
	</div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
    <div>
      <div id="content-wrapper">
	<div id="viewer" class="pdfViewer"></div>
      </div></div>
    </div>
    <div>
     <!-- <div id="comment-wrapper" class="well">
	<h4>Comments</h4> -->
	<div class="comment-list well" style="display:none;">
	  <div class="comment-list-container">
	    <div class="comment-list-item"></div>
	  </div>
	  <form class="comment-list-form">
	    <input type="text" placeholder="Add a Comment"/>
	  </form>
	  <!--	</div> -->
	</div>
    </div>
  </div>
  <span id="document-id" style="visibility:hidden"><?php echo $document_id; ?></span>
</div>
