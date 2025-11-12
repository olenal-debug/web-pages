// Sample data for the table
const tableData = [
    {
        itemId: 'LA-24-SHIRAZ-CONC',
        description: 'Red grape concentrate (Shiraz) for enrichment.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Red River Wines Co.', initial: 'R', color: 'blue' },
        tags: ['Grape concentrate', 'Colour', 'Sugar adjust'],
        type: 'Concentrat',
        country: 'Australia',
        manufacturer: 'Tarac Australia',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Shiraz',
        region: 'Riverland',
        vintage: '2024',
        allergens: ['Sulfites'],
        price: '$3.60/L',
        totalQty: '38,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/29/2025 16:56'
    },
    {
        itemId: 'LA-24-JUICE-WHITE-LOWBRIX',
        description: 'Low Brix juice for alcohol adjustment and mouthfeel.',
        uom: 'L',
        attachments: '2 files',
        status: 'Active',
        vendor: { name: 'Sunset Ridge Wines', initial: 'S', color: 'pink' },
        tags: ['Juice', 'Brix reduction', 'White blend'],
        type: 'Juice',
        country: 'Australia',
        manufacturer: 'Australian Juice Co.',
        prodDate: '11/11/2022',
        expiryDate: '11/11/2026',
        variety: 'Merlot',
        region: 'Hunter Valley',
        vintage: '2024',
        allergens: [],
        price: '$3.60/L',
        totalQty: '18,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/28/2025 15:45'
    },
    {
        itemId: 'LA-24-MERLOT-CONC',
        description: 'Merlot-based concentrated wine for blending.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Barossa Creek', initial: 'B', color: 'red' },
        tags: ['Blend', 'Sugar', 'Rich mouthfeel'],
        type: 'Concentrat',
        country: 'Australia',
        manufacturer: 'Tarac Australia',
        prodDate: '8/22/2022',
        expiryDate: '8/22/2025',
        variety: 'Shiraz',
        region: 'Barossa Valley',
        vintage: '2024',
        allergens: ['Sulfites'],
        price: '$3.60/L',
        totalQty: '24,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/27/2025 14:30'
    },
    {
        itemId: 'LA-CONC-A125',
        description: 'Red grape concentrate for enrichment.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Sunset Valley Winery', initial: 'S', color: 'blue' },
        tags: [],
        type: 'Concentrat',
        country: 'Australia',
        manufacturer: 'WineX Solutions',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Cabernet Sauvignon',
        region: 'Riverland',
        vintage: '2024',
        allergens: [],
        price: '$3.60/L',
        totalQty: '12,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/26/2025 13:15'
    },
    {
        itemId: 'LA-CONC-B225',
        description: 'Low Brix juice for alcohol adjustment and mouthfeel.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Tamar Valley Vineyard', initial: 'T', color: 'blue' },
        tags: [],
        type: 'Concentrat',
        country: 'Australia',
        manufacturer: 'Tarac Australia',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Merlot',
        region: 'Hunter Valley',
        vintage: '2023',
        allergens: [],
        price: '$3.60/L',
        totalQty: '18,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/25/2025 12:00'
    },
    {
        itemId: 'LA-CONC-C325',
        description: 'Low Brix juice for alcohol adjustment and mouthfeel.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Margaret River Estate', initial: 'M', color: 'blue' },
        tags: [],
        type: 'Juice',
        country: 'Australia',
        manufacturer: 'WineX Solutions',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Shiraz',
        region: 'Barossa Valley',
        vintage: '2023',
        allergens: [],
        price: '$3.60/L',
        totalQty: '16,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/20/2025 06:10'
    },
    {
        itemId: 'LA-CONC-D425',
        description: 'Red grape concentrate for enrichment.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Coonawarra Cellars', initial: 'C', color: 'blue' },
        tags: [],
        type: 'Juice',
        country: 'Australia',
        manufacturer: 'Tarac Australia',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Semillon',
        region: 'Riverland',
        vintage: '2022',
        allergens: [],
        price: '$3.60/L',
        totalQty: '25,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/21/2025 07:20'
    },
    {
        itemId: 'LA-CONC-E525',
        description: 'Low Brix juice for alcohol adjustment and mouthfeel.',
        uom: 'L',
        attachments: '1 file',
        status: 'Archived',
        vendor: { name: 'Barossa Valley Wine Co.', initial: 'B', color: 'blue' },
        tags: [],
        type: 'Concentrat',
        country: 'Australia',
        manufacturer: 'WineX Solutions',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Merlot',
        region: 'Hunter Valley',
        vintage: '2023',
        allergens: [],
        price: '$3.60/L',
        totalQty: '500 L',
        totalValue: '$33.456.83',
        createdDate: '5/22/2025 08:30'
    },
    {
        itemId: 'LA-CONC-F725',
        description: 'Low Brix juice for alcohol adjustment and mouthfeel.',
        uom: 'L',
        attachments: '1 file',
        status: 'Inactive',
        vendor: { name: 'Hunter Valley Wines', initial: 'H', color: 'blue' },
        tags: [],
        type: 'Juice',
        country: 'Australia',
        manufacturer: 'Tarac Australia',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Shiraz',
        region: 'Barossa Valley',
        vintage: '2024',
        allergens: [],
        price: '$3.60/L',
        totalQty: '38,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/23/2025 09:40'
    },
    {
        itemId: 'LA-CONC-G825',
        description: 'Red grape concentrate for enrichment.',
        uom: 'L',
        attachments: '1 file',
        status: 'Active',
        vendor: { name: 'Yarra Valley Vineyards', initial: 'Y', color: 'blue' },
        tags: ['Bentonite'],
        type: 'Concentrat',
        country: 'Australia',
        manufacturer: 'WineX Solutions',
        prodDate: '5/29/2025',
        expiryDate: '6/15/2026',
        variety: 'Semillon',
        region: 'Riverland',
        vintage: '2024',
        allergens: ['Sulfites'],
        price: '$3.60/L',
        totalQty: '45,000 L',
        totalValue: '$33.456.83',
        createdDate: '5/24/2025 10:50'
    }
];

let selectedRows = new Set();
let sortColumn = null;
let sortDirection = 'asc';

// Generate table rows
function generateTableRows() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    tableData.forEach((row, index) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'table-row';
        rowElement.dataset.index = index;
        if (selectedRows.has(index)) {
            rowElement.classList.add('selected');
        }

        const isSelected = selectedRows.has(index);

        rowElement.innerHTML = `
            <div class="table-column" style="width: 40px;">
                <div class="table-cell">
                    <button class="checkbox-btn" data-row-index="${index}">
                        <div class="checkbox" data-checked="${isSelected}"></div>
                    </button>
                </div>
            </div>
            <div class="table-column" style="width: 160px;">
                <div class="table-cell">${row.itemId}</div>
            </div>
            <div class="table-column" style="width: 230px;">
                <div class="table-cell">${row.description}</div>
            </div>
            <div class="table-column" style="width: 72px;">
                <div class="table-cell">
                    <span class="badge badge-gray">${row.uom}</span>
                </div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">${row.attachments}</div>
            </div>
            <div class="table-column" style="width: 85px;">
                <div class="table-cell">
                    <span class="badge badge-${row.status === 'Active' ? 'green' : row.status === 'Archived' ? 'white' : 'gray'}">${row.status}</span>
                </div>
            </div>
            <div class="table-column" style="width: 200px;">
                <div class="table-cell">
                    <div class="vendor-cell">
                        <div class="avatar avatar-${row.vendor.color}">${row.vendor.initial}</div>
                        <span>${row.vendor.name}</span>
                    </div>
                </div>
            </div>
            <div class="table-column" style="width: 180px;">
                <div class="table-cell">
                    ${row.tags.length > 0 ? row.tags.map(tag => `<span class="badge badge-gray">${tag}</span>`).join('') : '<span>—</span>'}
                </div>
            </div>
            <div class="table-column" style="width: 130px;">
                <div class="table-cell">
                    <span class="badge badge-gray">${row.type}</span>
                </div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">
                    <span class="badge badge-white">${row.country}</span>
                </div>
            </div>
            <div class="table-column" style="width: 140px;">
                <div class="table-cell">${row.manufacturer}</div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">${row.prodDate}</div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">${row.expiryDate}</div>
            </div>
            <div class="table-column" style="width: 150px;">
                <div class="table-cell">
                    <span class="badge badge-red">${row.variety}</span>
                </div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">
                    <span class="badge badge-gray">${row.region}</span>
                </div>
            </div>
            <div class="table-column" style="width: 88px;">
                <div class="table-cell">
                    <span class="badge badge-gray">${row.vintage}</span>
                </div>
            </div>
            <div class="table-column" style="width: 140px;">
                <div class="table-cell">
                    ${row.allergens.length > 0 ? row.allergens.map(allergen => `<span class="badge badge-gray">${allergen}</span>`).join('') : '<span>—</span>'}
                </div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">${row.price}</div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">${row.totalQty}</div>
            </div>
            <div class="table-column" style="width: 120px;">
                <div class="table-cell">${row.totalValue}</div>
            </div>
            <div class="table-column" style="width: 140px;">
                <div class="table-cell">${row.createdDate}</div>
            </div>
            <div class="table-column" style="width: 40px;">
                <div class="table-cell">
                    <button class="action-btn" data-row-index="${index}">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4.66667C8.73638 4.66667 9.33333 4.06971 9.33333 3.33333C9.33333 2.59695 8.73638 2 8 2C7.26362 2 6.66667 2.59695 6.66667 3.33333C6.66667 4.06971 7.26362 4.66667 8 4.66667Z" fill="#0a0a0a"/>
                            <path d="M8 9.33333C8.73638 9.33333 9.33333 8.73638 9.33333 8C9.33333 7.26362 8.73638 6.66667 8 6.66667C7.26362 6.66667 6.66667 7.26362 6.66667 8C6.66667 8.73638 7.26362 9.33333 8 9.33333Z" fill="#0a0a0a"/>
                            <path d="M8 14C8.73638 14 9.33333 13.403 9.33333 12.6667C9.33333 11.9303 8.73638 11.3333 8 11.3333C7.26362 11.3333 6.66667 11.9303 6.66667 12.6667C6.66667 13.403 7.26362 14 8 14Z" fill="#0a0a0a"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        tbody.appendChild(rowElement);
    });

    updateSelectedCount();
    attachRowEventListeners();
}

// Attach event listeners to rows
function attachRowEventListeners() {
    // Checkbox buttons
    document.querySelectorAll('.checkbox-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const rowIndex = btn.dataset.rowIndex;
            if (rowIndex !== undefined) {
                toggleRowSelection(parseInt(rowIndex));
            } else if (btn.id === 'selectAll') {
                toggleSelectAll();
            }
        });
    });

    // Action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const rowIndex = parseInt(btn.dataset.rowIndex);
            showActionMenu(rowIndex, btn);
        });
    });

    // Row click
    document.querySelectorAll('.table-row').forEach(row => {
        row.addEventListener('click', (e) => {
            if (!e.target.closest('.checkbox-btn') && !e.target.closest('.action-btn')) {
                const index = parseInt(row.dataset.index);
                toggleRowSelection(index);
            }
        });
    });
}

// Toggle row selection
function toggleRowSelection(index) {
    if (selectedRows.has(index)) {
        selectedRows.delete(index);
    } else {
        selectedRows.add(index);
    }
    updateRowSelection(index);
    updateSelectedCount();
    updateSelectAllState();
}

// Toggle select all
function toggleSelectAll() {
    const allSelected = selectedRows.size === tableData.length;
    if (allSelected) {
        selectedRows.clear();
    } else {
        tableData.forEach((_, index) => selectedRows.add(index));
    }
    generateTableRows();
}

// Update row selection visual state
function updateRowSelection(index) {
    const row = document.querySelector(`.table-row[data-index="${index}"]`);
    const checkbox = row?.querySelector('.checkbox');
    if (row && checkbox) {
        if (selectedRows.has(index)) {
            row.classList.add('selected');
            checkbox.dataset.checked = 'true';
        } else {
            row.classList.remove('selected');
            checkbox.dataset.checked = 'false';
        }
    }
}

// Update select all state
function updateSelectAllState() {
    const selectAllBtn = document.getElementById('selectAll');
    const selectAllCheckbox = selectAllBtn?.querySelector('.checkbox');
    if (selectAllCheckbox) {
        const allSelected = selectedRows.size === tableData.length;
        selectAllCheckbox.dataset.checked = allSelected ? 'true' : 'false';
    }
}

// Update selected count
function updateSelectedCount() {
    document.getElementById('selectedCount').textContent = selectedRows.size;
    document.getElementById('totalCount').textContent = tableData.length;
}

// Show action menu (placeholder)
function showActionMenu(rowIndex, button) {
    alert(`Actions for row ${rowIndex + 1}`);
    // In a real app, this would show a dropdown menu
}

// Sort table
function sortTable(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }

    tableData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];

        // Handle nested objects
        if (column === 'vendor' && typeof aVal === 'object') {
            aVal = aVal.name;
            bVal = bVal.name;
        }

        // Handle arrays (tags, allergens)
        if (Array.isArray(aVal)) {
            aVal = aVal.join(', ');
            bVal = bVal.join(', ');
        }

        // Convert to string for comparison
        aVal = String(aVal || '').toLowerCase();
        bVal = String(bVal || '').toLowerCase();

        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    generateTableRows();
    updateSortIndicators();
}

// Update sort indicators
function updateSortIndicators() {
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
        if (header.dataset.column === sortColumn) {
            header.classList.add(sortDirection === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    });
}

// Footer actions
document.getElementById('loadMore')?.addEventListener('click', () => {
    alert('Load more rows');
});

document.getElementById('scrollToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('rowsPerPage')?.addEventListener('change', (e) => {
    console.log('Rows per page:', e.target.value);
});

document.getElementById('bulkAction')?.addEventListener('change', (e) => {
    if (e.target.value && selectedRows.size > 0) {
        alert(`Performing ${e.target.value} on ${selectedRows.size} items`);
    }
});

// Attach sort listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => {
            sortTable(header.dataset.column);
        });
    });

    generateTableRows();
});

