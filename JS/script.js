document.addEventListener("DOMContentLoaded", () => {
  const listElement = document.getElementById("checklist");
  const form = document.getElementById("addItemForm");
  const itemNameInput = document.getElementById("itemNameInput");
  const itemDetailsInput = document.getElementById("itemDetailsInput");
  const saveStatusElement = document.getElementById("saveStatus");

  const STORAGE_KEY = "minecraftMansionChecklist";

  // Lista inicial de materiais fornecida
  const initialData = [
    {
      id: 1,
      name: "Stripped Spruce Log",
      details: "9249 (144.6 Stacks) 2.7 Double chests",
      checked: false,
    },
    {
      id: 2,
      name: "Deepslate Tile Stairs",
      details: "3169 (50 stacks)",
      checked: false,
    },
    { id: 3, name: "Oak Planks", details: "3067 (48 stacks)", checked: false },
    {
      id: 4,
      name: "Spruce Slab",
      details: "2065 (32.3 Stacks)",
      checked: false,
    },
    {
      id: 5,
      name: "Spruce Stairs",
      details: "1781 (28 Stacks)",
      checked: false,
    },
    { id: 6, name: "Stone", details: "914 (14.5 stacks)", checked: false },
    {
      id: 7,
      name: "Dark Oak Trapdoor",
      details: "785 (12.3 Stacks)",
      checked: false,
    },
    {
      id: 8,
      name: "Stone Bricks",
      details: "527 (8.3 Stacks)",
      checked: false,
    },
    {
      id: 9,
      name: "Deepslate Tile Wall",
      details: "515 (8.1 Stacks)",
      checked: false,
    },
    {
      id: 10,
      name: "Oak Trapdoor",
      details: "479 (7.5 Stacks)",
      checked: false,
    },
    {
      id: 11,
      name: "Spruce Trapdoor",
      details: "444 (7 Stacks)",
      checked: false,
    },
    {
      id: 12,
      name: "White Terracotta",
      details: "384 (6 Stacks)",
      checked: false,
    },
    {
      id: 13,
      name: "Deepslate Tile Slab",
      details: "381 (6 stacks)",
      checked: false,
    },
    {
      id: 14,
      name: "Cracked Stone Bricks",
      details: "271 (4.3 Stacks)",
      checked: false,
    },
    {
      id: 15,
      name: "Dark Oak Slab",
      details: "262 (4.1 Stacks)",
      checked: false,
    },
    { id: 16, name: "Jungle Fence", details: "248 (4 stacks)", checked: false },
    {
      id: 17,
      name: "Mud Brick Wall",
      details: "200 (3.2 Stacks)",
      checked: false,
    },
    { id: 18, name: "Bookshelves", details: "192 (3 Stacks)", checked: false },
    { id: 19, name: "Oak Leaves", details: "170 (2.8 Stacks)", checked: false },
    {
      id: 20,
      name: "Andesite Wall",
      details: "169 (2.8 Stacks)",
      checked: false,
    },
    { id: 21, name: "Lantern", details: "165 (2.8 Stacks)", checked: false },
    {
      id: 22,
      name: "Spruce Planks",
      details: "162 (2.8 Stacks)",
      checked: false,
    },
    {
      id: 23,
      name: "White Carpet",
      details: "156 (2.5 Stacks)",
      checked: false,
    },
    {
      id: 24,
      name: "Andesite Slab",
      details: "135 (2.2 Stacks)",
      checked: false,
    },
    { id: 25, name: "Flower pot", details: "126 (2 Stacks)", checked: false },
    { id: 26, name: "Brown Carpet", details: "105 (64 + 41)", checked: false },
    { id: 27, name: "Chest", details: "103 (64 + 39)", checked: false },
    { id: 28, name: "Red Carpet", details: "97 (64 + 33)", checked: false },
    {
      id: 29,
      name: "Polished Andesite Stairs",
      details: "95 (64 + 31)",
      checked: false,
    },
    { id: 30, name: "Dark Oak Fence", details: "94 (64 + 30)", checked: false },
    {
      id: 31,
      name: "Andesite Stairs",
      details: "88 (64 + 24)",
      checked: false,
    },
    { id: 32, name: "Bamboo", details: "83", checked: false },
    { id: 33, name: "Spruce Sign", details: "70", checked: false },
    { id: 34, name: "Mud Brick Slab", details: "64", checked: false },
    { id: 35, name: "Chain", details: "58", checked: false },
    { id: 36, name: "Dark Oak Stairs", details: "58", checked: false },
    { id: 37, name: "Decorated Pot", details: "58", checked: false },
    { id: 38, name: "Jungle Stairs", details: "56", checked: false },
    { id: 39, name: "Polished Andesite Slab", details: "54", checked: false },
    { id: 40, name: "Oak Sign", details: "46", checked: false },
    { id: 41, name: "Polished Andesite", details: "46", checked: false },
    { id: 42, name: "Glass Pane", details: "42", checked: false },
    { id: 43, name: "Lectern", details: "42", checked: false },
    { id: 44, name: "Podzol", details: "39", checked: false },
    { id: 45, name: "Jungle slab", details: "37", checked: false },
    { id: 46, name: "Yellow Terracotta", details: "35", checked: false },
    { id: 47, name: "Campfire", details: "31", checked: false },
    { id: 48, name: "Flowering Azalea Leaves", details: "31", checked: false },
    { id: 49, name: "Smooth Quartz Stairs", details: "31", checked: false },
    { id: 50, name: "Grass Block", details: "29", checked: false },
    { id: 51, name: "Ladder", details: "28", checked: false },
    { id: 52, name: "Dead Bush", details: "26", checked: false },
    { id: 53, name: "Spruce Fence Gate", details: "26", checked: false },
    { id: 54, name: "Brewing Stand", details: "25", checked: false },
    { id: 55, name: "Red Wool", details: "25", checked: false },
    { id: 56, name: "Sea Pickle", details: "25", checked: false },
    { id: 57, name: "Stone Brick Slab", details: "25", checked: false },
    { id: 58, name: "Beacon", details: "24 (Goodluck)", checked: false },
    { id: 59, name: "End Rod", details: "24", checked: false },
    { id: 60, name: "Spruce wood", details: "24", checked: false },
  ];

  let items = [];

  // Função para salvar no Local Storage
  function saveItems() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    showSaveStatus();
  }

  // Função para carregar do Local Storage
  function loadItems() {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      items = JSON.parse(storedItems);
    } else {
      // Se não houver nada salvo, usa a lista inicial
      items = [...initialData];
    }
    renderList();
  }

  // Função para renderizar a lista na tela
  function renderList() {
    listElement.innerHTML = ""; // Limpa a lista antes de renderizar

    // Garante que os itens checados fiquem no final
    const sortedItems = [...items].sort((a, b) => a.checked - b.checked);

    sortedItems.forEach((item) => {
      const li = document.createElement("li");
      li.className = "checklist-item";
      li.dataset.id = item.id;

      if (item.checked) {
        li.classList.add("checked");
      }

      // Renderiza a visualização normal do item
      renderItemView(li, item);
      listElement.appendChild(li);
    });
  }

  // Função para renderizar a visualização padrão de um item
  function renderItemView(li, item) {
    li.innerHTML = `
                    <input type="checkbox" class="item-check" ${
                      item.checked ? "checked" : ""
                    }>
                    <div class="item-info">
                        <span class="item-name">${escapeHTML(item.name)}</span>
                        <div class="item-details">${escapeHTML(
                          item.details
                        )}</div>
                    </div>
                    <div class="item-actions">
                        <button class="action-btn edit-btn" title="Editar">✏️</button>
                        <button class="action-btn delete-btn" title="Excluir">❌</button>
                    </div>
                `;

    // Adiciona listeners para os novos elementos
    li.querySelector(".item-check").addEventListener("change", () =>
      toggleCheck(item.id)
    );
    li.querySelector(".edit-btn").addEventListener("click", () =>
      renderEditView(li, item)
    );
    li.querySelector(".delete-btn").addEventListener("click", () =>
      deleteItem(item.id)
    );
  }

  // Função para renderizar a visualização de EDIÇÃO de um item
  function renderEditView(li, item) {
    li.innerHTML = `
                    <div class="item-info" style="width: 100%;">
                        <input type="text" class="edit-input" value="${escapeHTML(
                          item.name
                        )}">
                        <input type="text" class="edit-input" value="${escapeHTML(
                          item.details
                        )}">
                    </div>
                    <div class="item-actions">
                        <button class="save-btn">Salvar</button>
                    </div>
                `;

    li.querySelector(".save-btn").addEventListener("click", () => {
      const newName = li.querySelector(".edit-input:nth-child(1)").value;
      const newDetails = li.querySelector(".edit-input:nth-child(2)").value;
      updateItem(item.id, newName, newDetails);
    });
  }

  // Função para ATUALIZAR (Editar) um item
  function updateItem(id, newName, newDetails) {
    const item = items.find((i) => i.id === id);
    if (item) {
      item.name = newName;
      item.details = newDetails;
      saveItems();
      renderList(); // Re-renderiza a lista toda
    }
  }

  // Função para ADICIONAR novo item
  function handleAddItem(e) {
    e.preventDefault();
    const name = itemNameInput.value.trim();
    const details = itemDetailsInput.value.trim();

    if (name === "") return;

    const newItem = {
      id: Date.now(), // ID único baseado no timestamp
      name: name,
      details: details,
      checked: false,
    };

    items.push(newItem);
    saveItems();
    renderList();

    // Limpa os campos do formulário
    itemNameInput.value = "";
    itemDetailsInput.value = "";
  }

  // Função para MARCAR/DESMARCAR
  function toggleCheck(id) {
    const item = items.find((i) => i.id === id);
    if (item) {
      item.checked = !item.checked;
      saveItems();
      renderList(); // Re-renderiza para aplicar a classe e ordenar
    }
  }

  // Função para DELETAR item
  function deleteItem(id) {
    // Usei um confirm customizado (mentalmente) já que alert/confirm são ruins
    // Mas para este caso, vamos deletar direto para manter simples.
    items = items.filter((i) => i.id !== id);
    saveItems();
    renderList();
  }

  // Função para mostrar a notificação de "Salvo"
  let saveTimeout;
  function showSaveStatus() {
    clearTimeout(saveTimeout); // Reseta o timer se salvar de novo
    saveStatusElement.classList.add("show");

    saveTimeout = setTimeout(() => {
      saveStatusElement.classList.remove("show");
    }, 2000); // Fica na tela por 2 segundos
  }

  // Função simples para evitar XSS (Cross-Site Scripting)
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (match) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[match];
    });
  }

  // --- Inicialização ---
  form.addEventListener("submit", handleAddItem);
  loadItems();
});
