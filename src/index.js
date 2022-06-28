async function init() {
  miro.board.ui.on("icon:click", async () => {

    // Get selected items
    let selectedItems = await miro.board.getSelection()

    // Filter sticky notes from selected items
    let stickyNotes = selectedItems.filter((item) => item.type === 'sticky_note')

    // Delete selected stickers
    for (const stickyNote of stickyNotes) {
      await miro.board.remove(stickyNote) 
    }


    // Create sticky note that hides the text
    for (const stickyNote of stickyNotes) {
      if(parseInt(stickyNote.width) == 6){
        await miro.board.createStickyNote({
          content: stickyNote.content,
          x: stickyNote.x,
          y: stickyNote.y,
          width: 199,
          height: stickyNote.height,
        }) 
      } else {
        await miro.board.createStickyNote({
          content: stickyNote.content,
          x: stickyNote.x,
          y: stickyNote.y,
          width: 6,
          height: stickyNote.height,
        }) 
      }
    }

  });
}

init();