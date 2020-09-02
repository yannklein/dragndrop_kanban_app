import Sortable from 'sortablejs';
import Rails from "@rails/ujs";

const initKanbanSortable = (ulElements) => {
  const saveKanbanBinded = saveKanban.bind(null, ulElements);
  ulElements.forEach((ul) => {
    new Sortable(ul, {
        group: 'kanban', // set both lists to same group
        animation: 300,
        onEnd: saveKanbanBinded
    });
  });
};

const kanbanForm = document.querySelector(".kanban-form-input");
const saveKanban = (ulElements) => {
  const new_cards = {columns: []};
  ulElements.forEach(ul => {
    const itemsArray = [];
    ul.querySelectorAll(".kanban-col-item").forEach(item => itemsArray.push(item.innerText));
    new_cards.columns.push(
      {
        'name': ul.querySelector(".kanban-col-name").innerText,
        'items': itemsArray
      }
    );
  });
  // kanbanForm.value = JSON.stringify(new_cards);

  const kanbanId = document.querySelector(".kanban").dataset.id;
  const formData = new FormData();
  formData.append('kanban[cards]', JSON.stringify(new_cards));
  Rails.ajax({
      url: `/kanbans/${kanbanId}`,
      type: "patch",
      data: formData
    })
}

export { initKanbanSortable };
