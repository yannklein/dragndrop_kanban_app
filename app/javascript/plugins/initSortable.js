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
  // We will build an Object new_cards containing all the Ids
  // E.g. :
  // {
  //   columns: [
  //     {
  //       id: 0,
  //       itemIds: [4,3,2]
  //     },
  //     {
  //       id: 1,
  //       itemIds: [5]
  //     },
  //     {
  //       id: 2,
  //       itemIds: [0,1]
  //     },
  //   ]
  // }
  const new_cards = {"columns": []};
  ulElements.forEach(ul => {
    const itemIds = [];
    ul.querySelectorAll(".kanban-col-item")
      .forEach(item => itemIds.push(Number.parseInt(item.dataset.itemId,10)));
    new_cards.columns.push(
      {
        'id': Number.parseInt(ul.dataset.colId,10),
        'itemIds': itemIds
      }
    );
  });
  // kanbanForm.value = JSON.stringify(new_cards);
  console.log(new_cards);
  const kanbanId = document.querySelector(".kanban").dataset.id;
  const formData = new FormData();
  formData.append('kanban[kanbanIds]', JSON.stringify(new_cards));
  Rails.ajax({
      url: `/kanbans/${kanbanId}/sort`,
      type: "patch",
      data: formData
    })
}

export { initKanbanSortable };
